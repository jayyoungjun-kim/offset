import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "신청 완료",
  alternates: { canonical: "/apply/complete" },
  robots: { index: false, follow: false, nocache: true },
};

export default function ApplyCompleteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
