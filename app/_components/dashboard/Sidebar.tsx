'use client';

import React from 'react';
import { Star, X } from 'lucide-react';
import concepts from '@/data/concepts';
import content from '@/data/contents';
import Image from 'next/image';
import { SidebarProps } from '@/types/sidebar';


const Sidebar: React.FC<SidebarProps> = ({
  selectedConcept,
  setSelectedConcept,
  completedLessons,
  favorites,
  sidebarOpen,
  setSidebarOpen
}) => {
  const totalLessons = Object.values(content).reduce((acc, cat) => acc + cat.lessons.length, 0);
  const completedTotal = completedLessons.size;
  const totalProgress = Math.round((completedTotal / totalLessons) * 100);

  return (
    <aside
      className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 lg:w-72 xl:w-80 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
        lg:h-screen
      `}
    >
      <div className="p-4 lg:p-6 border-b border-gray-200">
        <div className="flex items-center justify-between lg:justify-start">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" width={50} height={40} alt="logo" />
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-gray-800">
                O&apos;zbekcha Vim
              </span>
              <p className="text-xs lg:text-sm text-gray-500 mt-1">
                Bosqichma-bosqich, ko‘k choy ichib o‘rganamiz
              </p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg text-black cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

      </div>

      <nav className="flex-1 overflow-y-auto p-3 lg:p-4">
        {concepts.map(concept => {
          const Icon = concept.icon;
          const isActive = selectedConcept === concept.id;
          const conceptLessons = content[concept.id]?.lessons || [];
          const conceptCompleted = conceptLessons.filter(l => completedLessons.has(l.id)).length;

          return (
            <button
              key={concept.id}
              onClick={() => {
                setSelectedConcept(concept.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 lg:py-3 rounded-lg mb-2 transition-all cursor-pointer ${isActive
                ? 'bg-[#FC4850] text-white shadow-lg'
                : 'text-gray-700 hover:bg-red-50 hover:text-[#FC4850]'
                }`}
            >
              <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-red-100'}`}>
                <Icon size={18} className={isActive ? 'text-white' : 'text-[#FC4850]'} />
              </div>
              <div className="flex-1 text-left">
                <span className="font-medium block text-sm lg:text-base">{concept.title}</span>
                {conceptLessons.length > 0 && (
                  <span className={`text-xs ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                    {conceptCompleted}/{conceptLessons.length}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </nav>

      {/* <div className="p-4 border-t border-gray-200"> */}
      {/*   <div className="flex items-center gap-2 text-sm"> */}
      {/*     <Star size={16} className="text-[#FC4850]" /> */}
      {/*     <span className="text-gray-600">{favorites.size} sevimli</span> */}
      {/*   </div> */}
      {/* </div> */}

      <div className="p-3">
        <div className="mt-4 p-3 bg-red-50 rounded-lg">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-gray-600">Umumiy progress</span>
            <span className="text-xs font-bold text-[#FC4850]">{totalProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#FC4850] h-2 rounded-full transition-all duration-500"
              style={{ width: `${totalProgress}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">{completedTotal} / {totalLessons} dars</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
