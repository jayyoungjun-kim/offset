"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AnimatedOffsetLogo from "./animated-offset-logo";
import { trackEvent } from "./analytics";

export default function SiteHeader(){
  const [isLogoPressed, setIsLogoPressed] = useState(false);
  const logoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (logoTimer.current) clearTimeout(logoTimer.current);
  }, []);

  const pressLogo = () => {
    setIsLogoPressed(true);
    if (logoTimer.current) clearTimeout(logoTimer.current);
    logoTimer.current = setTimeout(() => setIsLogoPressed(false), 400);
  };

  const trackNavigation = (navItem: "about" | "workshop", destination: string) => {
    trackEvent("navigation_click", {
      navigation_location: "header",
      navigation_item: navItem,
      link_url: destination,
    });
  };

  return <header className="site-header"><div className="container nav-inner">
    <Link className={`nav-logo${isLogoPressed ? " is-pressed" : ""}`} href="/" onPointerDown={pressLogo} onClick={() => trackEvent("navigation_click", {navigation_location:"header",navigation_item:"logo",link_url:"/"})}><AnimatedOffsetLogo /></Link>
    <nav className="nav-menu" aria-label="주요 메뉴"><Link href="/about" onClick={() => trackNavigation("about", "/about")}>About</Link><Link href="/workshop" onClick={() => trackNavigation("workshop", "/workshop")}><span className="workshop-menu-desktop">Portfolio Workshop</span><span className="workshop-menu-mobile">Workshop</span></Link></nav>
  </div></header>;
}
