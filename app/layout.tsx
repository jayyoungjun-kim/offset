import type { Metadata } from "next";
import "./globals.css";
import ChannelTalk from "./channel-talk";
export const metadata: Metadata = {
  metadataBase: new URL("https://offset.quest"),
  title: "프로덕트 디자이너 포트폴리오 워크숍",
  description: "채용 담당자의 관점으로 진단하고 4주 동안 리뷰와 수정을 반복하는 소규모 포트폴리오 워크숍",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "OFFSET | Design Learning Platform",
    description: "디자이너가 배우고, 성장하고, 변화하는 방식을 탐구합니다.",
    url: "https://offset.quest",
    siteName: "OFFSET",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OFFSET | Design Learning Platform",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OFFSET | Design Learning Platform",
    description: "디자이너가 배우고, 성장하고, 변화하는 방식을 탐구합니다.",
    images: ["/og-image.png"],
  },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  const configuredId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
  const measurementId = /^G-[A-Z0-9]+$/i.test(configuredId) ? configuredId : "";
  return <html lang="ko">
    <head>{measurementId ? <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments);};gtag('js',new Date());gtag('config','${measurementId}');`}} />
    </> : null}</head>
    <body>{children}<ChannelTalk /></body>
  </html>;
}
