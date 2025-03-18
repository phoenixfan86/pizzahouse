"use client"

import React, { useRef, RefObject, useEffect } from "react";

interface NavbarProps {
  navOpen: boolean
}

interface NavItem {
  label: string
  navLink: string
  className: string
  ref?: RefObject<HTMLAnchorElement | null>
}

const Navbar: React.FC<NavbarProps> = ({ navOpen }) => {
  const lastActiveLink = useRef<HTMLAnchorElement>(null)
  const activeBox = useRef<HTMLDivElement>(null)

  const initActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px'
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px'
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px'
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px'
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      initActiveBox();
      window.addEventListener("resize", initActiveBox);

      return () => {
        window.removeEventListener("resize", initActiveBox);
      };
    }
  }, []);

  const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (lastActiveLink.current && activeBox.current) {

      lastActiveLink.current?.classList.remove("active");

      event.currentTarget.classList.add("active");
      lastActiveLink.current = event.currentTarget;

      activeBox.current.style.top = event.currentTarget.offsetTop + "px";
      activeBox.current.style.left = event.currentTarget.offsetLeft + "px";
      activeBox.current.style.width = event.currentTarget.offsetWidth + "px";
      activeBox.current.style.height = event.currentTarget.offsetHeight + "px";
    }
  };

  const navItems: NavItem[] = [
    {
      label: 'Home',
      navLink: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'Pizza',
      navLink: '#pizza',
      className: 'nav-link',
    },
    {
      label: 'About',
      navLink: '#about',
      className: 'nav-link',
    },
    {
      label: 'Contact',
      navLink: '#contact',
      className: 'nav-link',
    }
  ]

  return (
    <nav className={`navbar z-10 ${navOpen ? "active" : ""}`}>
      {
        navItems.map(({ label, navLink, className, ref }, key) => (
          <a
            href={navLink}
            key={key}
            ref={ref}
            className={className}
            onClick={activeCurrentLink}>
            {label}
          </a>
        ))
      }

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

export default Navbar
