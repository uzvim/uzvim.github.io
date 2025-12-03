"use client";

import React, { useState } from "react";
import content from "@/data/contents";
import Tips from "../sections/Tips/Tips";
import Resources from "../sections/Resources/Resources";
import { Github, Menu, Star } from "lucide-react";
import Sidebar from "./sidebar/Sidebar";
import Link from "next/link";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Lesson from "./lesson/Lesson";

type DashboardProps = { initialConcept: string }

const Dashboard: React.FC<DashboardProps> = ({ initialConcept }) => {
  const [selectedConcept, setSelectedConcept] = useState<string>(initialConcept);
  const [completedLessons, setCompletedLessons] = useLocalStorage<string[]>("vim_completed", []);
  const [favorites, setFavorites] = useLocalStorage<string[]>("vim_favorites", []);
  const [copiedCommand, setCopiedCommand] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleLesson = (lessonId: string) => {
    setCompletedLessons((prev) => {
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
    setFavorites((prev) => {
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
    setTimeout(() => setCopiedCommand(""), 2000);
  };

  const currentContent = content[selectedConcept];
  const progress = currentContent
    ? Math.round(
      (currentContent.lessons.filter((l) => completedLessons.includes(l.id)).length /
        currentContent.lessons.length) *
      100,
    )
    : 0;

  return (
    <div className="flex h-screen flex-col bg-gray-50 lg:flex-row">
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 lg:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="cursor-pointer rounded-lg p-2 text-black transition-colors hover:bg-gray-100"
        >
          <Menu />
        </button>
        <h1 className="text-lg font-bold text-gray-800">O&apos;zbekcha Vim</h1>
        <div className="w-10" />
      </div>

      <div className="absolute top-2 right-3 flex gap-2.5 z-10">
        <Link
          href="https://github.com/uzvim"
          target="_blank"
          className="flex items-center gap-2 rounded-xl border-t border-gray-200 bg-[#309C34] p-3 px-4 transition-all hover:bg-[#2a7a2c] text-white"
        >
          <Github size={16} className="fill-white" />
        </Link>
        <Link
          href="/stars"
          className="flex items-center gap-2 rounded-xl border-t border-gray-200 bg-[#309C34] p-3 transition-all hover:bg-[#2a7a2c] text-white"
        >
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
        <div className="mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
          <header className="mb-6 lg:mb-8">
            <h2 className="mb-3 text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
              {currentContent.title}
            </h2>
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="h-2 flex-1 rounded-full bg-gray-200 lg:h-2.5">
                <div
                  className="h-2 rounded-full bg-[#309C34] transition-all duration-500 lg:h-2.5"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm font-semibold whitespace-nowrap text-gray-600 lg:text-base">
                {progress}%
              </span>
            </div>
          </header>

          <div className="space-y-4 lg:space-y-6">
            {currentContent.lessons.map((lesson, index) => (
              <Lesson
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
