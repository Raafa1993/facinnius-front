import React from "react";
import { RiFacebookFill, RiInstagramFill, RiWhatsappFill, RiYoutubeFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div>
          <a href="#" className="footer__logo">
            Facinnius.
          </a>

          <p className="footer__description">
            Comprometidos em <br />
            levar até você os melhores <br />
            Produtos.
          </p>
        </div>

        <div className="footer__content">
          <div>
            <h3 className="footer__title">Companhia</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Linhas
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Blog</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Eventos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Locao</h3>

            <p className="footer__information">
              Av Nova Zelândia, 1050 <br />
              Parque Capuava - Santo André/SP
            </p>

            <p className="footer__information" style={{ marginTop: '10px' }}>
              CEP 09270-190
            </p>

            <p className="footer__information" style={{ marginTop: '10px' }}>
              CNPJ 20.712.759/0001-04
            </p>
          </div>

          <div>
            <h3 className="footer__title">Redes sociasi</h3>

            <ul className="footer__social">
              <a
                href="https://pt-br.facebook.com/facinnius/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-facebook-fill"><RiFacebookFill /></i>
              </a>
              <a
                href="https://www.instagram.com/facinnius/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-instagram-line"><RiInstagramFill /></i>
              </a>

              <a
                href="https://www.youtube.com/facinnius-cosmeticos"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-whatsapp-line"><RiYoutubeFill /></i>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__info container">
        <span className="footer__copy">
          &#169; M10web. Todos os direitos reservados
        </span>

        <a href="#" className="footer__privacy">
          Termos & Condiçoes
        </a>
      </div>
    </footer>
  );
}
