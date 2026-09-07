import AdminConsole from "../admin-console";
import "../../programs/programs.css";
import "../admin.css";
export const metadata = {
  title: "운영 콘솔 미리보기",
  robots: { index: false, follow: false },
};
export default function Preview() {
  return <AdminConsole preview />;
}
