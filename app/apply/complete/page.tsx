import SiteHeader from "../../site-header";

export default function ApplyCompletePage(){
  return <main className="complete-page">
    <SiteHeader />
    <section className="container complete-content">
      <img className="complete-icon" src="/complete-heart.png" alt="" aria-hidden="true" />
      <h1>신청서 제출이 완료되었습니다</h1>
      <p>신청해주셔서 감사합니다.<br />2일 이내에 참가 여부를 이메일과 문자로 안내드리겠습니다.</p>
    </section>
  </main>;
}
