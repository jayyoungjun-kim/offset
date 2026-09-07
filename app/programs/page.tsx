import type { Metadata } from "next";
import ProgramList from "./program-list";
import { listPrograms } from "../lib/store";
import type { Program } from "../lib/program-data";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "프로그램",
  description: "디자이너의 다음 단계를 위한 워크숍, 클래스와 모임.",
  alternates: { canonical: "/programs" },
};
export default async function ProgramsPage() {
  let programs: Program[] = [];
  let unavailable = false;
  try {
    programs = await listPrograms();
  } catch {
    unavailable = true;
  }
  return <ProgramList initialPrograms={programs} initiallyUnavailable={unavailable} />;
}
