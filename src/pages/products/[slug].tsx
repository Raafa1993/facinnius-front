import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ProdutosData } from "../../data/ProdutosData";

export default function Products() {
  const router = useRouter();

  const filterProductsId = ProdutosData.filter(obj => obj.id === Number(router.query.id))[0]


  return (
    <>
      <Header />
      <main className="main">
        <section className="quality section" id="premium">
          <div className="quality__container container">
            <h2 className="section__title">
              Oferecemos uma preparação premium e de melhor qualidade só para você!
            </h2>

            <div className="quality__content grid">
              <div className="quality__images">
                <Image
                  src={filterProductsId.imagem}
                  alt={filterProductsId.title}
                  className="quality__img-big"
                />
                {/* <img
                  src="https://www.facinnius.com.br/assets/application/uploads/produtos/infinitysss_5e8b8d3fd129a.png"
                  alt=""
                  className="quality__img-small"
                /> */}
              </div>

              <div className="quality__data">
                <h1 className="quality__title">{filterProductsId.title}</h1>
                {/* <h2 className="quality__price">{filterProductsId.title}</h2>
                <span className="quality__special">Especial Price</span> */}
                <p className="quality__description">
                  {filterProductsId.descricao}
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
