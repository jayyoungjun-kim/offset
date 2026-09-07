import Link from "next/link";
import ProgramHeader, { ProgramFooter } from "../program-header";
export default function NotFound() {
  return (
    <div className="of-site">
      <ProgramHeader />
      <main className="of-wrap of-account">
        <div className="of-empty">
          <h1>프로그램을 찾을 수 없어요.</h1>
          <p>주소가 변경되었거나 공개가 종료된 프로그램입니다.</p>
          <Link href="/programs" className="of-button">
            프로그램 목록으로
          </Link>
        </div>
      </main>
      <ProgramFooter />
    </div>
  );
}
