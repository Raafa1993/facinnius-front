import React from "react";
import { RiFacebookFill, RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div>
          <a href="#" className="footer__logo">
            Shop.
          </a>

          <p className="footer__description">
            Committed to bringing you the <br />
            best clothing from popular <br />
            brands.
          </p>
        </div>

        <div className="footer__content">
          <div>
            <h3 className="footer__title">Company</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Category
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Contact info
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Blog</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Popular news
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Recent news
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Office</h3>

            <p className="footer__information">
              Monday - Saturday <br />
              9AM - 10PM
            </p>
          </div>

          <div>
            <h3 className="footer__title">Contact us</h3>

            <ul className="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-facebook-fill"><RiFacebookFill /></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-instagram-line"><RiInstagramFill /></i>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-whatsapp-line"><RiWhatsappFill /></i>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__info container">
        <span className="footer__copy">
          &#169; Bedimcode. All rigths reserved
        </span>

        <a href="#" className="footer__privacy">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
}
