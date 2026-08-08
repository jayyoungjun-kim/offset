import footerLogo from "./assets/offset-logo.svg";

export default function SiteFooter(){
  return <footer className="site-footer"><div className="container footer-inner">
    <div className="footer-top-row"><img className="footer-logo" src={footerLogo.src} alt="OFFSET" width="124" height="20" /><p className="footer-copy">© 2026 OFFSET</p></div>
    <div className="footer-info">
      <p>OFFSET ㅣ 대표 김영준</p>
      <p>전화번호: <a href="tel:01087872392">010-8787-2392</a> ㅣ 이메일: <a href="mailto:offset.learn@gmail.com">offset.learn@gmail.com</a> ㅣ 계좌: 토스뱅크 1000-0057-2874 김영준</p>
      <p>사업자등록번호: 794-11-03054</p>
    </div>
  </div></footer>;
}
