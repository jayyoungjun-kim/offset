import ExpandingHeadline from "./expanding-headline";
import HomeFloatingIcons from "./home-floating-icons";
import SiteHeader from "./site-header";

export default function Home() {
  return <main className="home-page">
    <SiteHeader />
    <section className="home-stage">
      <HomeFloatingIcons />
      <ExpandingHeadline />
    </section>
  </main>;
}
