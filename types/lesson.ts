interface Command {
  cmd: string;
  desc: string;
}

interface Lesson {
  id: string;
  title: string;
  desc: string;
  doc?: string;
  commands?: Command[];
}

interface LessonCardProps {
  lesson: Lesson;
  index: number;
  isCompleted: boolean;
  isFavorite: boolean;
  toggleLesson: (id: string) => void;
  toggleFavorite: (id: string) => void;
  copyCommand: (cmd: string) => void;
  copiedCommand: string;
}

export type { Command, Lesson, LessonCardProps }
