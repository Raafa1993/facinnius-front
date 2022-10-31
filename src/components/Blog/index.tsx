import React from "react";
import BlogImage from '../../../public/images/blog1.png'
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { BlogData } from "../../data/BlogData";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Blog() {
  const router = useRouter();
  const { t } = useTranslation();

  function handleOnClickProduct(title: string) {
    router.push({
      pathname: `/blogs/${title}`,
    })
  }

  const blogs = BlogData
  const latesBlogs = blogs.slice(0, 2);

  console.log('latesBlogs', latesBlogs)

  return (
    <section className="blog section" id="blog">
      <div className="blog__container container">
        <h2 className="section__titleSpecialty">
          {t('home_blog_titulo')}
        </h2>

        <div className="blog__content grid">
          {latesBlogs.map((row) => (

            <article key={row.id} className="blog__card">
              <div className="blog__image">
                <Image src={row.imagem} alt={row.titulo} className="blog__img" />

                <button onClick={() => handleOnClickProduct(row.query)} className="blog__button">
                  <i className="bx bx-right-arrow-alt"><BiRightArrowAlt /></i>
                </button>
              </div>

              <div className="blog__data">
                <h2 className="blog__title">{row.descricao}</h2>
                <p className="blog__description">
                  {row.descricao}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center',justifyItems: 'center', width: '100%', marginTop: '20px' }}>
            <Link href="/blogs" className="buttonDefault specialty__button">
              <a className="buttonDefault specialty__button" style={{ marginLeft: '0' }}>
                {t('home_especialidades_button')}
              </a>
            </Link>
          </div>
      </div>
    </section>
  );
}
