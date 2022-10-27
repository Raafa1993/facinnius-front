import Link from "next/link";
import React, { useEffect, useState } from "react";
import LanguagesSwitch from "../LanguagesSwitch";
import logoFacinnius from '../../../public/images/logoFacinnius.png'
import Image from "next/image";

export default function Header() {
  const [menuFixed, setMenuFixed] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setMenuFixed(true);
      } else if (window.scrollY === 0) {
        setMenuFixed(false);
      }
    });
    return () =>
      document.removeEventListener("scroll", () => {
        setMenuFixed(false);
      });
  }, []);

  return (
    <header className={`header ${menuFixed ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <Link href="/" className="nav__logo"  >
          <a style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
            <Image src={logoFacinnius} alt="Logo" />
            Facinnius.
          </a>
        </Link>

        {/* <LanguagesSwitch /> */}

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link href="/" className="nav__link active-link">
                <a>
                  <i className="ri-home-line"></i>
                  <span>Home</span>
                </a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/lista-produtos" className="nav__link">
                <a>
                  <i className="ri-price-tag-3-line"></i>
                  <span>Produtos</span>
                </a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/locais" className="nav__link">
                <a>
                  <i className="ri-compass-line"></i>
                  <span>Locais</span>
                </a>
              </Link>
            </li>

            <li className="nav__item">
              <Link href="/contato" className="nav__link">
                <a>
                  <i className="ri-t-shirt-line"></i>
                  <span>Contato</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <i className="ri-moon-line change-theme" id="theme-button"></i>
      </nav>
    </header>
  );
}
