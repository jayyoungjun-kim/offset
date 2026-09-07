import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "포트폴리오 워크숍 신청",
  description: "OFFSET 프로덕트 디자이너 포트폴리오 완성반 참가 신청서입니다.",
  alternates: { canonical: "/apply" },
  robots: { index: false, follow: false, nocache: true },
};

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
