import type { Metadata } from "next";
import "./globals.css";
import ChannelTalk from "./channel-talk";
export const metadata: Metadata = { title: "프로덕트 디자이너 포트폴리오 워크숍", description: "채용 담당자의 관점으로 진단하고 4주 동안 리뷰와 수정을 반복하는 소규모 포트폴리오 워크숍" };
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
