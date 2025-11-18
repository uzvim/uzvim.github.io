import { BookOpen, Terminal, Keyboard, Settings, Zap, Code, FileText, Search, Command } from 'lucide-react';

interface Concept {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
}
const concepts: Concept[] = [
  { id: 'basics', title: 'Asoslar', icon: BookOpen, color: 'bg-blue-500' },
  { id: 'neovim', title: 'Neovim', icon: Settings, color: 'bg-teal-500' },
  { id: 'nitrovim', title: 'NitroVim', icon: BookOpen, color: 'bg-blue-500' },
  { id: 'modes', title: 'Rejimlar', icon: Terminal, color: 'bg-purple-500' },
  { id: 'navigation', title: 'Navigatsiya', icon: Keyboard, color: 'bg-green-500' },
  { id: 'editing', title: 'Tahrirlash', icon: Code, color: 'bg-orange-500' },
  { id: 'search', title: 'Qidiruv', icon: Search, color: 'bg-pink-500' },
  { id: 'files', title: 'Fayllar', icon: FileText, color: 'bg-indigo-500' },
  { id: 'advanced', title: 'Ilg\'or', icon: Zap, color: 'bg-yellow-500' },
  { id: 'cheatsheet', title: 'Cheatsheet', icon: Command, color: 'bg-red-500' }
];

export default concepts;
