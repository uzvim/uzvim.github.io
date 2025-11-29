import { Lightbulb } from "lucide-react";

export default function Tips() {
  return (
    <section className="mt-6 lg:mt-8 bg-linear-to-r from-yellow-50 to-orange-50 rounded-xl p-4 lg:p-6 border border-yellow-200">
      <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <Lightbulb className="text-yellow-600" size={24} />
        Foydali maslahatlar
      </h3>
      <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base text-gray-700">
        <li className="flex items-start gap-2">
          <span className="text-yellow-600 font-bold shirnk-0 mt-1">•</span>
          <span>Har kuni 15-20 daqiqa Vim bilan ishlang - bu mushaqqatli amaliyot talab qiladi</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-600 font-bold shirnk-0 mt-1">•</span>
          <span>Bir vaqtning o&apos;zida ko&apos;p buyruqlarni o&apos;rganmang - 2-3 tadan boshlang va ularni yaxshi o&apos;zlashtiring</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-600 font-bold shirnk-0 mt-1">•</span>
          <span>Normal rejimda ko&apos;proq vaqt o&apos;tkazing - bu Vim ning kuchi</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-600 font-bold shirnk-0 mt-1">•</span>
          <span><code className="bg-white px-2 py-0.5 rounded text-xs lg:text-sm font-mono">:help</code> dan foydalanishni o&apos;rganing - bu eng kuchli hujjat manbai</span>
        </li>
      </ul>
    </section>
  )
}

