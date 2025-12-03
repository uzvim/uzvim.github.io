import { notFound } from "next/navigation";
import concepts from "@/data/concepts";
import DashboardWrapper from "./_components/DashboardWrapper";

interface LessonPageProps {
  params: { lessonId: string } | Promise<{ lessonId: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonId } = "then" in params ? await params : params;

  if (!concepts.some(c => c.id === lessonId)) return notFound();

  return <DashboardWrapper initialConcept={lessonId} />;
}

export function generateStaticParams() {
  return concepts.map(c => ({ lessonId: c.id }));
}
