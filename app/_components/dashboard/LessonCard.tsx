'use client';
import React from 'react';
import { CheckCircle, Star, Copy, Terminal, Book } from 'lucide-react';
import {  LessonCardProps } from '@/types';

const LessonCard: React.FC<LessonCardProps> = ({
  lesson,
  index,
  isCompleted,
  isFavorite,
  toggleLesson,
  toggleFavorite,
  copyCommand,
  copiedCommand
}) => {
  return (
    <article className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold shrink-0 ${
            isCompleted ? 'bg-[#FC4850] text-white' : 'bg-gray-100 text-gray-600'
          }`}>
            {isCompleted ? <CheckCircle size={20} /> : <span className="text-base lg:text-lg">{index + 1}</span>}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="hidden sm:flex items-start justify-between mb-3">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">{lesson.title}</h3>
            <button
              onClick={() => toggleFavorite(lesson.id)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors shrink-0 cursor-pointer"
            >
              <Star
                size={20}
                className={isFavorite ? 'fill-[#FC4850] text-[#FC4850]' : 'text-gray-400'}
              />
            </button>
          </div>

          <p className="text-sm lg:text-base text-gray-600 mb-4">{lesson.desc}</p>

          {lesson.doc && (
            <div className="bg-red-50 border-l-4 border-[#FC4850] p-3 lg:p-4 mb-4 rounded">
              <div className="flex items-start gap-2">
                <Book size={18} className="text-[#FC4850] mt-0.5 shrink-0" />
                <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">{lesson.doc}</p>
              </div>
            </div>
          )}

          {lesson.commands && lesson.commands?.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-3 lg:p-4 mb-4">
              <h4 className="text-sm lg:text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Terminal size={16} />
                Buyruqlar
              </h4>
              <div className="space-y-2">
                {lesson.commands.map((command, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-3 rounded border border-gray-200 hover:border-[#FC4850] transition-colors gap-2"
                  >
                    <div className="flex-1 min-w-0">
                      <code className="text-xs lg:text-sm font-mono text-[#FC4850] font-semibold block break-all">
                        {command.cmd}
                      </code>
                      <p className="text-xs text-gray-500 mt-1">{command.desc}</p>
                    </div>
                    <button
                      onClick={() => copyCommand(command.cmd)}
                      className="self-end sm:self-center p-2 hover:bg-red-50 rounded transition-colors shrink-0 cursor-pointer"
                      title="Nusxa olish"
                      aria-label="Buyruqni nusxa olish"
                    >
                      {copiedCommand === command.cmd ? (
                        <CheckCircle size={16} className="text-[#FC4850]" />
                      ) : (
                        <Copy size={16} className="text-gray-400" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => toggleLesson(lesson.id)}
            className={`w-full sm:w-auto px-4 py-2.5 rounded-lg font-medium text-sm lg:text-base transition-all cursor-pointer ${
              isCompleted
                ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                : 'bg-[#FC4850] text-white hover:bg-[#e03e45] shadow-md'
            }`}
          >
            {isCompleted ? 'Bajarildi' : 'Bajarilgan deb belgilash'}
          </button>
        </div>
      </div>
    </article>
  );
};

export default LessonCard;
