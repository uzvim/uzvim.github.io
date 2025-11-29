import { resources } from "@/data/resources";
import { Book } from "lucide-react";
import Link from "next/link";


export default function Resources() {
  return (
    <section className="mt-4 lg:mt-6 mb-6 lg:mb-8 bg-linear-to-r from-purple-50 to-pink-50 rounded-xl p-4 lg:p-6 border border-purple-200">
      <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <Book className="text-purple-600" size={24} />
        Qo&apos;shimcha manbalar
      </h3>
      <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base text-gray-700">
        {resources.map((res) => (
          <li key={res.name} className="flex items-start gap-2">
            <span className="text-purple-600 font-bold shrink-0 mt-1">•</span>
            <span className="wrap-break-word">
              <Link href={res.href} target="_blank" rel="noopener noreferrer" className="font-semibold">
                {res.name}
              </Link>{" "}
              - {res.description}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
