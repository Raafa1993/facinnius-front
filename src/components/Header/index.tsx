import React, { useEffect, useState } from "react";

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
        <a href="/" className="nav__logo">
          Facinnius.
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link active-link">
                <i className="ri-home-line"></i>
                <span>Home</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#new" className="nav__link">
                <i className="ri-price-tag-3-line"></i>
                <span>Produtos</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#collection" className="nav__link">
                <i className="ri-compass-line"></i>
                <span>Onde encotrar</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#products" className="nav__link">
                <i className="ri-t-shirt-line"></i>
                <span>Contato</span>
              </a>
            </li>
          </ul>
        </div>

        <i className="ri-moon-line change-theme" id="theme-button"></i>
      </nav>
    </header>
  );
}
