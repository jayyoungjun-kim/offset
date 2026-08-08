import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import principleLearn from "./assets/principle-learn.png";
import principleRefine from "./assets/principle-refine.png";
import principleShare from "./assets/principle-share.png";
import principleForward from "./assets/principle-forward.png";
import brandingWordmark from "./assets/offset-branding.png";
import TypingIntro from "./typing-intro";

const principles = [
  {
    icon: principleLearn,
    title: "Learn Continuously",
    body: "배움은 끝나는 과정이 아니라 이어지는 과정입니다. 새로운 관점과 경험을 통해 계속해서 자신의 생각을 확장합니다.",
  },
  {
    icon: principleRefine,
    title: "Refine Repeatedly",
    body: "좋은 결과는 반복적인 개선을 통해 만들어집니다. 첫 번째 답보다, 더 나은 답을 찾아가는 과정을 중요하게 생각합니다.",
  },
  {
    icon: principleShare,
    title: "Share Perspectives",
    body: "성장은 다양한 관점이 만날 때 더 빠르게 이루어집니다. 경험과 생각을 나누며 서로에게 새로운 질문을 만듭니다.",
  },
  {
    icon: principleForward,
    title: "Move Forward",
    body: "어제보다 조금 더 나아지는 것. OFFSET은 완벽함보다 지속적인 발전을 목표로 합니다.",
  },
];

export default function AboutPage() {
  return <main className="service-page">
    <SiteHeader />
    <section className="service-intro-shell">
      <div className="service-content service-intro-content">
        <section className="service-intro">
          <TypingIntro />
        </section>
      </div>
    </section>
    <div className="service-background">
      <article className="service-content">
        <div className="service-sections">
          <section className="service-section">
            <header><span>Philosophy</span><h2>Design evolves through continuous refinement</h2></header>
            <p>디자인은 한 번의 아이디어로 완성되지 않습니다. 새로운 질문을 던지고, 기존의 방식을 다시 바라보고, 더 나은 선택을 반복하는 과정 속에서 조금씩 발전해왔습니다. 오늘 우리가 당연하게 사용하는 수많은 제품과 경험 역시 수많은 시행착오와 작은 개선이 축적된 결과입니다. 디자인의 역사는 거대한 혁신의 역사이기도 하지만, 동시에 수많은 작은 변화가 쌓여 다음 단계로 나아간 역사이기도 합니다. OFFSET은 디자인이 발전해온 방식으로 사람도 성장한다고 믿습니다. 한 번의 큰 도약보다 꾸준한 배움과 반복적인 개선, 그리고 새로운 관점을 통해 조금씩 더 나은 방향으로 나아가는 과정. 우리는 그 과정을 무엇보다 중요하게 생각합니다.</p>
          </section>

          <section className="service-section">
            <header><span>Mission</span><h2>Building environments where designers continue to evolve</h2></header>
            <p>배움은 지식을 전달하는 순간에 끝나지 않습니다. 좋은 질문을 만나고, 자신의 작업을 돌아보고, 다양한 관점을 경험하며 생각이 조금씩 변화할 때 비로소 성장이 시작됩니다. OFFSET은 워크숍과 콘텐츠, 커뮤니티를 통해 디자이너가 지속적으로 배우고, 만들고, 연결되며 성장할 수 있는 환경을 만들어갑니다.</p>
          </section>

          <section className="service-principles">
            <span>Principles</span>
            <div className="principle-grid">
              {principles.map((principle) => <article className="principle-card" key={principle.title}>
                <img className="principle-icon" src={principle.icon.src} alt="" width="50" height="50" loading="lazy" decoding="async" aria-hidden="true" />
                <h2>{principle.title}</h2>
                <p>{principle.body}</p>
              </article>)}
            </div>
          </section>

          <section className="service-section service-why">
            <header><span>Branding</span><h2>Meaning is built into every detail</h2></header>
            <img className="branding-wordmark" src={brandingWordmark.src} alt="O에서 T로 갈수록 글자 간격이 넓어지는 OFFSET 로고" width="195" height="44" loading="lazy" decoding="async" />
            <div>
              <p>브랜드의 이름과 아이덴티티는 같은 생각에서 출발했습니다. Offset은 위치를 조금 이동시키거나, 일정한 간격만큼 떨어뜨리는 것을 의미합니다. 아주 작은 이동이지만, 그 차이는 전체 균형과 관계를 바꾸고 새로운 결과를 만들어냅니다. OFFSET은 이러한 의미를 로고에도 담았습니다. 글자는 모두 같은 크기와 형태를 유지하지만, O에서 T로 갈수록 간격이 조금씩 넓어집니다. 일정한 간격이 아니라 단계적으로 확장되는 리듬은, 작은 변화가 다음 변화를 만들고 더 넓은 가능성으로 이어지는 과정을 표현합니다. 우리는 성장도 같은 방식으로 이루어진다고 믿습니다. 한 번의 큰 도약보다 새로운 관점을 만나고, 생각을 조금 확장하고, 이전보다 조금 더 나은 선택을 반복하는 과정. OFFSET은 그 작은 이동들이 모여 더 큰 성장을 만든다고 생각합니다.</p>
            </div>
          </section>
        </div>
      </article>
    </div>
    <SiteFooter />
  </main>;
}
