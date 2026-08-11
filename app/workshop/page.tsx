import type { Metadata } from "next";
import StickyWorkshopCta from "../sticky-workshop-cta";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";

const title = "프로덕트 디자이너 포트폴리오 완성반";
const description = "디자이너의 실무와 성장을 위한 OFFSET의 다양한 디자인 워크숍을 만나보세요.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/workshop",
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
    title,
    description,
    images: ["/og-image.png"],
  },
};

const workshopInfo = [
  ["진행 방식", "매주 피드백을 다음 회차 전까지 반영"],
  ["수업 방식", "피그마 활용"],
  ["대상", "주니어 프로덕트 디자이너"],
  ["진행기간", "주 1회, 총 4주"],
  ["진행시간", "회당 2시간 30분"],
  ["진행 장소", "오프라인 (추후 공지)"],
  ["모집 마감", "그룹별 정원 확정 시 종료"],
  ["시작 일시", "모집 마감 후 1~2주"],
  ["인원", "그룹당 4명, 최대 3개 그룹"],
  ["참가비", "320,000원"],
];

const steps = [
  "신청서를 작성해주세요.",
  "접수된 순서대로 포트폴리오와 신청 내용을 검토합니다.",
  "포트폴리오 상태와 현재 고민이 비슷한 참가자끼리 그룹을 구성합니다.",
  "참가 가능 여부를 이메일과 문자로 개별 안내드립니다.",
  "참가비 결제 후 참가가 최종 확정됩니다.",
];

const goodFit = [
  "포트폴리오는 만들었지만 지금 수준으로 지원해도 될지 확신이 없는 분",
  "여러 번 수정했지만 무엇을 더 개선해야 할지 방향을 찾기 어려운 분",
  "현업 프로덕트 디자이너이자 채용 담당자의 관점에서 객관적인 리뷰를 받아보고 싶은 분",
  "다른 사람의 포트폴리오 리뷰 과정도 함께 보며 자신의 기준을 넓히고 싶은 분",
  "피드백을 실제 작업에 반영하며 포트폴리오를 한 단계 끌어올리고 싶은 주니어 프로덕트 디자이너",
];

const poorFit = [
  "아직 포트폴리오가 없거나 처음부터 함께 제작하는 과정을 기대하는 분",
  "피드백만 받고 직접 수정하거나 개선할 계획이 없는 분",
  "단기간에 취업이나 이직을 보장하는 프로그램을 기대하는 분",
  "프로젝트 경험보다 새로운 UI를 만드는 수업을 기대하는 분",
  "현재 포트폴리오를 지속적으로 수정하고 발전시킬 시간을 확보하기 어려운 분",
];

const careerHistory = [
  "(현) 심플 컴플렉스, 디자인 디렉터",
  "(전) 29CM(무신사), 프로덕트 디자인 리드",
  "(전) 코인원, 시니어 프로덕트 디자이너 (액팅 리드)",
  "(전) 에이아이트릭스, 시니어 프로덕트 디자이너",
  "(전) 핀다, 프로덕트 디자이너",
  "(전) 오길비 코리아, 인터랙션 디자이너",
];

const teachingHistory = [
  { label: "파이 디자인 스쿨 (by 토스) 전문가", url: "https://www.phi.design/programs/courses/beautiful-interface" },
  { label: "연세대학교 인터렉션 디자인 수업 출강" },
  { label: "인프런 온라인 강의, 디자인 프로세스 제로투원 (평점 4.7, 수강평 154개, 수강생 8,300+)", url: "https://www.inflearn.com/course/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-%EC%A0%9C%EB%A1%9C%ED%88%AC%EC%9B%90-figma%EB%A1%9C?cid=338233" },
  { label: "한국디자인진흥원, 코리아디자인멤버십 멘토링" },
  { label: "디자인 스팩트럼, 디자인 테이블 시즌4 EP05 인터뷰" },
  { label: "INFCON 2024 컨퍼런스 발표" },
];

const faqs: {q:string; a:React.ReactNode}[] = [
  { q: "포트폴리오가 어느 정도 완성되어 있어야 하나요?", a: <>현재 포트폴리오가 있어야 합니다. 완성도보다 중요한 것은 <strong>리뷰를 받을 수 있는 형태로 정리되어 있는지</strong>입니다. 프로젝트의 일부가 부족하거나 계속 수정 중이어도 괜찮지만, 처음부터 함께 만드는 과정은 포함되지 않습니다.</> },
  { q: "취업 준비생도 참여할 수 있나요?", a: "물론입니다. 취업 준비생, 주니어 프로덕트 디자이너, 이직을 준비하는 디자이너 모두 참여할 수 있습니다. 다만 비슷한 경험 수준의 참가자들로 그룹을 구성해, 서로의 리뷰가 더 많은 도움이 될 수 있도록 운영합니다." },
  { q: "왜 그룹당 4명만 모집하나요?", a: "모든 포트폴리오를 충분한 시간 동안 깊이 리뷰하기 위해서입니다. 인원이 많아질수록 피드백은 얕아지고, 수정 과정을 함께 살펴보기도 어려워집니다. 그룹당 4명은 각자의 포트폴리오를 충분히 다루면서도 다른 사람의 리뷰를 함께 배울 수 있는 가장 적절한 규모라고 생각합니다. 최대 3개 그룹까지 운영합니다." },
  { q: "다른 사람의 리뷰도 함께 듣게 되나요?", a: "네. 모든 리뷰는 멘토가 진행하며, 다른 참가자의 리뷰도 함께 듣게 됩니다. 다른 사람의 포트폴리오를 객관적으로 바라보는 과정은 자신의 포트폴리오를 다시 보는 기준을 만드는 데 큰 도움이 됩니다." },
  { q: "워크숍에서는 어떤 부분을 중점적으로 리뷰하나요?", a: <>프로젝트의 선택과 순서, 스토리 구성, 문제 해결 과정, 나의 역할과 기여도, 결과물의 전달력, 화면 구성과 시각적 완성도까지 전체적인 관점에서 리뷰합니다. 단순히 UI를 고치는 것이 아니라, <strong>채용 담당자가 어떻게 읽는지</strong>를 기준으로 개선 방향을 함께 찾습니다.</> },
  { q: "신청하면 바로 참여할 수 있나요?", a: "신청서는 접수된 순서대로 검토합니다. 제출한 포트폴리오와 신청 내용을 바탕으로 이 과정에서 실질적인 도움을 받을 수 있는 분들을 선정하고, 포트폴리오 상태와 현재 고민이 비슷한 참가자끼리 그룹을 구성합니다. 참가 가능 여부는 개별적으로 안내드리며, 그룹별 정원이 확정되면 모집을 종료합니다." },
  { q: "매주 과제가 있나요?", a: "별도의 과제는 없습니다. 대신 매주 받은 피드백을 바탕으로 포트폴리오를 수정해 오는 것이 가장 중요한 과정입니다. 워크숍의 핵심은 피드백을 듣는 것이 아니라, 실제 작업에 반영하며 반복적으로 개선하는 데 있습니다." },
  { q: "온라인으로도 참여할 수 있나요?", a: "아닙니다. 이 워크숍은 오프라인으로만 진행합니다. 같은 공간에서 함께 포트폴리오를 보며 이야기하는 과정이 리뷰의 깊이와 몰입도를 높인다고 생각하기 때문입니다." },
  { q: "환불이 가능한가요?", a: "참가 확정 후 워크숍 시작 전까지는 환불이 가능합니다. 다만 첫 번째 워크숍이 시작된 이후에는 환불이 어렵습니다. 그룹 단위로 운영되는 프로그램의 특성상 중도 취소 시 다른 참가자들의 진행에도 영향을 줄 수 있기 때문입니다." },
];

function Section({title, children}:{title:string; children:React.ReactNode}) {
  return <section className="content-section"><h2>{title}</h2>{children}</section>;
}

export default function Home() {
  return <main className="workshop-page">
    <SiteHeader />
    <div className="page-body">
      <article className="container main-content">
      <section className="hero">
        <img className="workshop-hero-icon" src="/workshop-icon-07.png" alt="" width="50" height="50" decoding="async" />
        <p className="eyebrow">1기 모집중</p>
        <h1>프로덕트 디자이너 포트폴리오 완성반</h1>
        <dl className="workshop-summary">
          <div>
            <dt>모집 기간</dt>
            <dd>접수 순서대로 검토 · 정원 확정 시 마감</dd>
          </div>
          <div>
            <dt>진행 방식</dt>
            <dd>워크샵 · 오프라인</dd>
          </div>
          <div>
            <dt>진행기간</dt>
            <dd>4주</dd>
          </div>
        </dl>
      </section>

      <Section title="워크샵이 끝났을 때 무엇을 얻을 수 있나요">
        <p>어떤 프로젝트를 앞에 둘지, 설명은 어디까지 해야 할지, 지금의 완성도로 지원해도 괜찮을지. 혼자서는 무엇을 더 바꿔야 할지 판단하기 어렵습니다. 이 워크숍에서는 프로덕트 디자인 리드이자 채용 담당자의 관점으로 현재 포트폴리오를 진단하고, 4주 동안 리뷰와 수정을 반복합니다. 보기 좋은 포트폴리오가 아니라, 나의 경험과 역량이 채용 담당자에게 분명하게 전달되는 포트폴리오를 만드는 것이 목표입니다.</p>
      </Section>
      <Section title="누구를 위한 워크샵인가요">
        <p>포트폴리오는 만들었지만 지금 수준으로 지원해도 될지 확신이 없는 주니어 프로덕트 디자이너를 위한 워크숍입니다. 혼자 수정하는 데 한계를 느끼거나, 현업 채용 기준으로 포트폴리오를 점검받고 싶은 분에게 적합합니다. 반대로 새로운 포트폴리오를 처음부터 만들고 싶은 분이나, 매주 피드백을 반영하기 어려운 분에게는 맞지 않을 수 있습니다.</p>
        <div className="audience-groups">
          <div><h3>이런 분께 추천합니다</h3><ul>{goodFit.map(item=><li key={item}>{item}</li>)}</ul></div>
          <div><h3>이런 분께는 추천하지 않습니다</h3><ul>{poorFit.map(item=><li key={item}>{item}</li>)}</ul></div>
        </div>
      </Section>
      <Section title="어떻게 진행되나요">
        <p>이 워크숍은 새로운 포트폴리오를 만드는 수업이 아닙니다. 이미 가지고 있는 포트폴리오를 현업의 기준으로 다시 다듬는 과정입니다. 매주 리뷰를 받고 직접 수정한 뒤, 다음 주에 다시 검토합니다. 리뷰 → 수정 → 리뷰 → 수정을 4주 동안 반복하며 실제 포트폴리오의 완성도를 높입니다.</p>
        <p>그룹당 4명의 주니어 프로덕트 디자이너로 구성되며, 최대 3개 그룹까지 운영합니다. 모든 리뷰는 멘토가 진행하며, 참가자는 다른 포트폴리오가 어떻게 개선되는지도 함께 보게 됩니다. 다른 사람의 피드백을 듣는 과정은 자신의 포트폴리오를 객관적으로 바라보는 가장 좋은 기준이 됩니다. 포트폴리오 상태와 현재 고민이 비슷한 참가자끼리 그룹을 구성하는 이유도 같습니다. 같은 고민을 가진 사람들과 함께할 때 가장 많은 것을 얻을 수 있습니다.</p>
      </Section>
      <Section title="멘토 소개">
        <p>지난 10년 이상 프로덕트 디자이너로 다양한 서비스를 설계했고, 최근 4년간은 프로덕트 디자인 리드이자 채용 담당자로 디자인 조직을 운영하며 수많은 포트폴리오를 검토하고 채용을 진행했습니다. 이 워크숍에서는 실제 채용 과정에서 포트폴리오를 읽고 판단해온 기준을 바탕으로, 지원자의 경험과 강점이 더 설득력 있게 전달될 수 있도록 리뷰합니다.</p>
        <div className="mentor-groups">
          <div><h3>회사 경력</h3><ul>{careerHistory.map(item=><li key={item}>{item}</li>)}</ul></div>
          <div><h3>강의 및 외부 활동</h3><ul>{teachingHistory.map(item=><li key={item.label}>{item.label}{item.url&&<> <a href={item.url} target="_blank" rel="noreferrer">Link</a></>}</li>)}</ul></div>
        </div>
        <div className="link-grid"><a href="https://jayyoungjun-kim.github.io/" target="_blank" rel="noreferrer">개인 포트폴리오 웹사이트 <span>↗</span></a><a href="https://simplecomplexstudio.com/" target="_blank" rel="noreferrer">심플 컴플렉스 웹사이트 <span>↗</span></a></div>
      </Section>
      <Section title="워크샵 정보">
        <p>4주 동안 오프라인으로 진행되며, 그룹당 4명, 최대 3개 그룹으로 운영합니다. 신청 시 현재 포트폴리오를 제출해야 하며, 매주 받은 피드백을 다음 모임 전까지 반영하는 것을 원칙으로 합니다.</p>
        <dl className="lined-list">{workshopInfo.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      </Section>
      <Section title="신청 절차">
        <p>신청서는 접수된 순서대로 검토합니다. 제출한 포트폴리오와 신청 내용을 바탕으로 참가자를 선정하고, 비슷한 상태와 고민을 가진 분끼리 그룹을 구성한 뒤 개별 안내드립니다.</p>
        <ol className="steps">{steps.map((step,i)=><li key={step}><b>{i+1}</b><span>{step}</span></li>)}</ol>
      </Section>
      <Section title="자주 묻는 질문">
        <div className="faq-list">{faqs.map(({q,a})=><details key={q}><summary><span>{q}</span><span className="faq-toggle" aria-hidden="true" /></summary><p>{a}</p></details>)}</div>
      </Section>
      </article>
      <StickyWorkshopCta />
    </div>
    <SiteFooter />
  </main>;
}
