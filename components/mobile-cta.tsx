"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const footer = document.querySelector("footer");
      const pastHero = window.scrollY > window.innerHeight * 0.7;
      const footerVisible = footer ? footer.getBoundingClientRect().top < window.innerHeight + 40 : false;
      setVisible(pastHero && !footerVisible);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <a className={`mobile-sticky-cta${visible ? " is-visible" : ""}`} href={whatsappUrl} target="_blank" rel="noreferrer">
      Solicitar projeto <ArrowUpRight aria-hidden="true" />
    </a>
  );
}
