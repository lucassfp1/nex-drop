"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { primaryNav, whatsappUrl } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const focusable = menuRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    const menuButton = menuButtonRef.current;
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key === "Tab" && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.body.classList.add("menu-is-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", onKeyDown);
      menuButton?.focus();
    };
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <Link href="/" className="brand" aria-label="NexDrop — página inicial" onClick={() => setMenuOpen(false)}>
        NEXDROP<span>.</span>
      </Link>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {primaryNav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
        Solicitar projeto <ArrowUpRight aria-hidden="true" />
      </a>

      <button
        ref={menuButtonRef}
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <div
        ref={menuRef}
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        id="mobile-menu"
        role="dialog"
        aria-label="Menu principal"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navegação mobile">
          {primaryNav.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link href="/contato" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
            <span>05</span>
            Contato
          </Link>
        </nav>
        <a
          className="button button-primary mobile-menu-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          tabIndex={menuOpen ? 0 : -1}
        >
          Começar um projeto <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
