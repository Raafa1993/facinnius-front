import React from "react";

export default function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Shop.
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="ri-home-line"></i>
                <span>Home</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#new" className="nav__link">
                <i className="ri-price-tag-3-line"></i>
                <span>New</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#collection" className="nav__link">
                <i className="ri-compass-line"></i>
                <span>Collection</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#products" className="nav__link">
                <i className="ri-t-shirt-line"></i>
                <span>Products</span>
              </a>
            </li>
          </ul>
        </div>

        <i className="ri-moon-line change-theme" id="theme-button"></i>
      </nav>
    </header>
  );
}
