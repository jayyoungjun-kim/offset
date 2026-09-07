export const metadata = {
  title: "나의 프로그램",
  robots: { index: false, follow: false },
  alternates: { canonical: "/account" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
