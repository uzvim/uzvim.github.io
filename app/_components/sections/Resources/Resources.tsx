import { Book } from "lucide-react";

export default function Resources() {
  return (
    <section className="mt-4 lg:mt-6 mb-6 lg:mb-8 bg-linear-to-r from-purple-50 to-pink-50 rounded-xl p-4 lg:p-6 border border-purple-200">
      <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <Book className="text-purple-600" size={24} />
        Qo&apos;shimcha manbalar
      </h3>
      <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base text-gray-700">
        <li className="flex items-start gap-2">
          <span className="text-purple-600 font-bold shirnk-0 mt-1">•</span>
          <span className="wrap-break-word"><strong className="font-semibold">vim.org</strong> - rasmiy Vim veb-sayti</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-purple-600 font-bold shirnk-0 mt-1">•</span>
          <span className="wrap-break-word"><strong className="font-semibold">neovim.io</strong> - Neovim rasmiy sayti</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-purple-600 font-bold shirnk-0 mt-1">•</span>
          <span className="wrap-break-word"><strong className="font-semibold">vimawesome.com</strong> - eng yaxshi Vim plugin lari</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-purple-600 font-bold shirnk-0 mt-1">•</span>
          <span className="wrap-break-word"><strong className="font-semibold">vim.fandom.com</strong> - Vim wiki va qo&apos;llanmalar</span>
        </li>
      </ul>
    </section>
  )
}

