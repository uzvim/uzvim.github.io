'use client';

import { useLocalStorage } from "@/hooks/useLocalStorage";
import content from "@/data/contents";
import { useMemo } from "react";
import LessonCard from "@/app/_components/dashboard/LessonCard";
import Tips from "@/app/_components/sections/Tips/Tips";
import Resources from "@/app/_components/sections/Resources/Resources";

export default function StarsClient() {
  const [favorites, setFavorites] = useLocalStorage<string[]>("vim_favorites", []);
  const [completedLessons] = useLocalStorage<string[]>("vim_completed", []);

  const allLessons = useMemo(() => {
    return Object.values(content).flatMap(concept =>
      concept.lessons.map(lesson => ({
        ...lesson,
        editor: concept.editor
      }))
    );
  }, []);

  const favoriteLessons = allLessons.filter(lesson =>
    favorites.includes(lesson.id)
  );

  const toggleFavorite = (lessonId: string) => {
    if (favorites.includes(lessonId)) {
      setFavorites(favorites.filter(id => id !== lessonId));
    } else {
      setFavorites([...favorites, lessonId]);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">

          <header className="mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
              Sevimlilar
            </h2>
            <p className="text-gray-600 text-sm">Saqlangan sevimli darslaringiz</p>
          </header>

          {favoriteLessons.length === 0 && (
            <div className="py-20 text-center text-gray-500 text-lg">
              Hozircha sevimlilarga hech narsa qo‘shilmagan.
            </div>
          )}

          <div className="space-y-4 lg:space-y-6">
            {favoriteLessons.map((lesson, index) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                editor={lesson.editor}
                index={index}
                isCompleted={completedLessons.includes(lesson.id)}
                isFavorite={favorites.includes(lesson.id)}
                toggleLesson={() => { }}
                toggleFavorite={toggleFavorite}
                copyCommand={() => { }}
                copiedCommand=""
              />
            ))}
          </div>

          <Tips />
          <Resources />
        </div>
      </main>
    </div>
  );
}
