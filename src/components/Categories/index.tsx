import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from 'react-i18next'
import { RiArrowRightLine } from "react-icons/ri";
import {LinhasData} from '../../data/LinhasData'

export default function Categories() {
  const { t } = useTranslation();
  return (
    <section className="new section" id="new">
      <h2 className="section__title">Linhas de produtos</h2>

      <div className="new__container container grid">
        {LinhasData.map((row) => (
          <article key={row.id} className="new__card">
            <Image src={row.imagem} className="new__img" alt="teste"  />

              <Link href="/lista-produtos" className="new__link">
                <a className="new__link">
                  <div className="new__data">
                    <h2 className="new__title">{row.title}</h2>
                    <span className="new__subtitle">{row.title}</span>
                  </div>

                  <i className="ri-arrow-right-line"><RiArrowRightLine /></i>
                </a>
              </Link>
          </article>  
        ))}
      </div>
    </section>
  );
}
