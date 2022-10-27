import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ProdutosData } from "../../data/ProdutosData";
import FacinniusImg from "../../../public/images/infinity.png";

export default function Products() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="quality section" id="premium">
          <div className="quality__container container">
            <h2 className="section__title">Sobre a Facinnius</h2>

            <div className="quality__content grid">
              <div className="quality__images">
                <Image
                  src={FacinniusImg}
                  alt="facinnius image"
                  className="quality__img-big"
                />
              </div>

              <div className="quality__data">
                <h1 className="quality__titleFaccinnius">
                  Com um pouco mais de 5 anos no ramo de cosméticos
                  profissionais, a marca oferece o que há de mais inovador e
                  tecnológico no segmento. Os produtos são elaborados com
                  matérias-primas importadas de altíssima qualidade, que atendem
                  perfeitamente as necessidades dos melhores cabeleireiros da
                  atualidade.
                </h1>
                {/* <h2 className="quality__price">{filterProductsId.title}</h2> */}
                {/* <span className="quality__special">Especial Price</span> */}
                <p className="quality__titleFaccinnius" style={{ marginTop: '2rem' }}>
                  Com lançamentos frequentes que acompanham o mercado mundial, a
                  Facinnius proporciona em suas linhas produtos com
                  características exclusivas que apresentam ótimos resultados e
                  satisfação de seus clientes.
                </p>

                {/* <div className="quality__buttons">
                  <button className="button">Buy Now</button>

                  <a href="#" className="quality__button">
                    See more
                    <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
