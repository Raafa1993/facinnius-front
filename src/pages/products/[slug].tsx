import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ProdutosBrData } from "../../data/ProdutosBrData";
import { ProdutosEnData } from "../../data/ProdutosEnData";
import { getProdutcBr } from "../../lib/produtosBr";
import { getProdutcEn } from "../../lib/produtosEn";

export default function Product({ productBr, productEn }) {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const isBr = i18n.language === 'ptbr' ? productBr : productEn
  const [filterProductsId, setFilterProductsId] = useState<any>({});

  useEffect(() => {
    setFilterProductsId({
      ...isBr.filter((obj: any) => obj.id === Number(router.query.id))[0],
    });
  }, [isBr]);

  return (
    <>
      <Header />
      <main className="main">
        <section className="quality section" id="premium">
          <div className="quality__container container">
            <h2 className="section__title">
              {t('produtoId_titulo')}
            </h2>

            <div className="quality__content grid">
              <div className="quality__images">
                <Image
                  src={filterProductsId.imagem}
                  alt={filterProductsId.title}
                  className="quality__img-big"
                />
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

export const getServerSideProps: GetServerSideProps = async () => {
  const productBr = getProdutcBr();
  const productEn = getProdutcEn();

  return {
    props: {
      productBr: productBr,
      productEn: productEn,
    }
  }
}
