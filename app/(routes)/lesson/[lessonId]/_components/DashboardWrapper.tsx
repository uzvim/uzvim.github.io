"use client";

import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("@/components/dashboard/Dashboard"), {
  ssr: false,
});

interface DashboardWrapperProps {
  initialConcept: string;
}

export default function DashboardWrapper({ initialConcept }: DashboardWrapperProps) {
  return <Dashboard initialConcept={initialConcept} />;
}
