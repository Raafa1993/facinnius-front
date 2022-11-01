import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import { BlogData } from "../../data/BlogData";

export default function BlogId() {
  const router = useRouter();

  const { t } = useTranslation();
  const [filterProductsId, setFilterProductsId] = useState<any>({});

  useEffect(() => {
    setFilterProductsId({
      ...BlogData.filter((obj) => obj.query === router.query.slug)[0],
    });
  }, []);

  return (
    <>
      <Header />
      <main className="main">
      <section className="quality section" id="premium">
          <div className="quality__container container">
            <div
              className="specialty__box"
              style={{ gridTemplateColumns: "1fr" }}
            >
              <h2 className="section__titleSpecialty">
                {filterProductsId.titulo}
              </h2>
            </div>
          </div>

          <div className="lojas container" style={{ paddingBottom: '0' }}>
            <h2 className="font-1-xxl">
              <span className="cor-p1">{filterProductsId.data}</span>
            </h2>
          </div>
          <div className="container textoBlog">
            <h3 style={{ lineHeight: '32px', color: 'hsl(220, 4%, 32%)' }} dangerouslySetInnerHTML={{ __html: filterProductsId.texto }} />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
