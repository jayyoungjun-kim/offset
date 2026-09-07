import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "OFFSET은 꾸준한 배움과 반복적인 개선, 다양한 관점을 통해 디자이너가 지속적으로 성장할 수 있는 환경을 만듭니다.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | OFFSET",
    description: "디자이너가 지속적으로 배우고 성장할 수 있는 환경을 만드는 OFFSET의 철학과 원칙을 소개합니다.",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | OFFSET",
    description: "디자이너가 지속적으로 배우고 성장할 수 있는 환경을 만드는 OFFSET의 철학과 원칙을 소개합니다.",
    images: ["/og-image.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
