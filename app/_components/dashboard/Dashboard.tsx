'use client';

import React, { useState } from 'react';
import LessonCard from './LessonCard';
import content from '@/data/contents';
import Tips from '../sections/Tips/Tips';
import Resources from '../sections/Resources/Resources';
import { Menu, Star } from 'lucide-react';
import Sidebar from './sidebar/Sidebar';
import Link from "next/link";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const Dashboard: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<string>('basics');
  const [completedLessons, setCompletedLessons] = useLocalStorage<string[]>("vim_completed", []);
  const [favorites, setFavorites] = useLocalStorage<string[]>("vim_favorites", []);
  const [copiedCommand, setCopiedCommand] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleLesson = (lessonId: string) => {
    setCompletedLessons(prev => {
      const set = new Set(prev);
      if (set.has(lessonId)) {
        set.delete(lessonId);
      } else {
        set.add(lessonId);
      }
      return Array.from(set);
    });
  };

  const toggleFavorite = (lessonId: string) => {
    setFavorites(prev => {
      const set = new Set(prev);
      if (set.has(lessonId)) {
        set.delete(lessonId);
      } else {
        set.add(lessonId);
      }
      return Array.from(set);
    });
  };

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCommand(cmd);
    setTimeout(() => setCopiedCommand(''), 2000);
  };

  const currentContent = content[selectedConcept];
  const progress = currentContent
    ? Math.round(
      (currentContent.lessons.filter(l =>
        completedLessons.includes(l.id)
      ).length /
        currentContent.lessons.length) *
      100
    )
    : 0;

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-black cursor-pointer"
        >
          <Menu />
        </button>
        <h1 className="text-lg font-bold text-gray-800">O&apos;zbekcha Vim</h1>
        <div className="w-10" />
      </div>

      <div className="p-3 border-t border-gray-200 absolute top-2 right-3 rounded-xl bg-[#309C34] hover:bg-[#2a7a2c] cursor-pointer transition-all">
        <Link href="/stars" className="flex items-center gap-2 text-sm text-white">
          <Star size={16} className="fill-white" />
          <span>{favorites.length}</span>
        </Link>
      </div>

      <Sidebar
        selectedConcept={selectedConcept}
        setSelectedConcept={setSelectedConcept}
        completedLessons={new Set(completedLessons)}
        favorites={new Set(favorites)}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
          <header className="mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
              {currentContent.title}
            </h2>
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="flex-1 bg-gray-200 rounded-full h-2 lg:h-2.5">
                <div
                  className="bg-[#309C34] h-2 lg:h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm lg:text-base font-semibold text-gray-600 whitespace-nowrap">
                {progress}%
              </span>
            </div>
          </header>

          <div className="space-y-4 lg:space-y-6">
            {currentContent.lessons.map((lesson, index) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                editor={currentContent.editor}
                index={index}
                isCompleted={completedLessons.includes(lesson.id)}
                isFavorite={favorites.includes(lesson.id)}
                toggleLesson={toggleLesson}
                toggleFavorite={toggleFavorite}
                copyCommand={copyCommand}
                copiedCommand={copiedCommand}
              />
            ))}
          </div>

          <Tips />
          <Resources />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
