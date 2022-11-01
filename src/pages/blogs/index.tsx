import { useRouter } from "next/router";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { BiRightArrowAlt } from "react-icons/bi";
import { BlogData } from "../../data/BlogData";

export default function Blogs() {
  const router = useRouter();
  const { t } = useTranslation();

  function handleOnClickProduct(title: string) {
    router.push({
      pathname: `/blogs/${title}`,
    })
  }

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
                {t('home_blog_titulo')}
              </h2>
            </div>
          </div>

          <div className="blog__content grid">
            {BlogData.map((row) => (
              <article key={row.id} className="blog__card">
                <div className="blog__image">
                  <Image src={row.imagem} alt={row.texto} className="blog__img"  />

                  <button onClick={() => handleOnClickProduct(row.query)} className="blog__button">
                    <i className="bx bx-right-arrow-alt"><BiRightArrowAlt /></i>
                  </button>
                </div>

                <div className="blog__data">
                  <h2 className="blog__title">{t('home_blog_subtitulo')}</h2>
                  <p className="blog__description">
                    {t('home_blog_descricao')}
                  </p>
                </div>
            </article>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
