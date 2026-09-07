import type { Metadata } from "next";
import "./globals.css";
import ChannelTalk from "./channel-talk";
import {config} from "./lib/auth";
const baseMetadata: Metadata = {
  metadataBase: new URL("https://offset.quest"),
  title: {
    default: "OFFSET | 디자이너의 지속적인 성장을 위한 러닝 플랫폼",
    template: "%s | OFFSET",
  },
  description: "OFFSET은 워크숍과 콘텐츠, 커뮤니티를 통해 디자이너가 지속적으로 배우고 성장할 수 있는 환경을 만드는 디자인 러닝 플랫폼입니다.",
  applicationName: "OFFSET",
  authors: [{ name: "OFFSET", url: "https://offset.quest" }],
  creator: "OFFSET",
  publisher: "OFFSET",
  keywords: ["OFFSET", "오프셋", "디자인 교육", "프로덕트 디자인", "포트폴리오 워크숍", "주니어 프로덕트 디자이너"],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
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

export function generateMetadata(): Metadata {
  if (config('SITE_ENV') !== 'qa') return baseMetadata;
  return {...baseMetadata, metadataBase:new URL('https://qa.offset.quest'),
    robots:{index:false,follow:false,noarchive:true},
    openGraph:{...baseMetadata.openGraph,url:'https://qa.offset.quest'}};
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://offset.quest/#organization",
      name: "OFFSET",
      alternateName: "오프셋",
      url: "https://offset.quest",
      logo: "https://offset.quest/offset-logo.svg",
      email: "offset.learn@gmail.com",
      telephone: "+82-10-8787-2392",
      description: "디자이너가 지속적으로 배우고, 만들고, 연결되며 성장할 수 있는 환경을 만드는 디자인 러닝 플랫폼",
    },
    {
      "@type": "WebSite",
      "@id": "https://offset.quest/#website",
      url: "https://offset.quest",
      name: "OFFSET",
      inLanguage: "ko-KR",
      publisher: { "@id": "https://offset.quest/#organization" },
    },
  ],
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  const isQa = config("SITE_ENV") === "qa";
  const configuredId = isQa ? "" : process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
  const measurementId = /^G-[A-Z0-9]+$/i.test(configuredId) ? configuredId : "";
  return <html lang="ko">
    <head>{measurementId ? <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments);};gtag('js',new Date());gtag('config','${measurementId}');`}} />
    </> : null}</head>
    <body>{isQa && <div className="qa-environment-banner" role="note"><strong>OFFSET QA</strong><span>개발·검증 환경입니다.</span><a href="/programs">프로그램</a><a href="/admin/preview">어드민 미리보기 ↗</a></div>}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd)}} />{children}{!isQa && <ChannelTalk />}</body>
  </html>;
}
