import { Lightbulb } from "lucide-react";

export default function Tips() {
  return (
    <section className="mt-6 rounded-xl border border-yellow-200 bg-linear-to-r from-yellow-50 to-orange-50 p-4 lg:mt-8 lg:p-6">
      <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-gray-800 lg:text-xl">
        <Lightbulb className="text-yellow-600" size={24} />
        Foydali maslahatlar
      </h3>
      <ul className="space-y-2 text-sm text-gray-700 lg:space-y-3 lg:text-base">
        <li className="flex items-start gap-2">
          <span className="shirnk-0 mt-1 font-bold text-yellow-600">•</span>
          <span>
            Har kuni 15-20 daqiqa Vim bilan ishlang - bu mashaqqatli amaliyot talab qiladi
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="shirnk-0 mt-1 font-bold text-yellow-600">•</span>
          <span>
            Bir vaqtning o&apos;zida ko&apos;p buyruqlarni o&apos;rganmang - 2-3 tadan boshlang va
            ularni yaxshi o&apos;zlashtiring
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="shirnk-0 mt-1 font-bold text-yellow-600">•</span>
          <span>Normal rejimda ko&apos;proq vaqt o&apos;tkazing - bu Vim ning kuchi</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="shirnk-0 mt-1 font-bold text-yellow-600">•</span>
          <span>
            <code className="rounded bg-white px-2 py-0.5 font-mono text-xs lg:text-sm">:help</code>{" "}
            dan foydalanishni o&apos;rganing - bu eng kuchli hujjat manbai
          </span>
        </li>
      </ul>
    </section>
  );
}
