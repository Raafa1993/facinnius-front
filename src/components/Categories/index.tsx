import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import {LinhasData} from '../../data/LinhasData'

export default function Categories() {
  return (
    <section className="new section" id="new">
      <h2 className="section__title">Linhas de Produtos</h2>

      <div className="new__container container grid">
        {LinhasData.map((row) => (
          <article className="new__card">
            <img src={row.imagem} className="new__img" alt="teste" />

            <a href="#" className="new__link">
              <div className="new__data">
                <h2 className="new__title">{row.title}</h2>
                <span className="new__subtitle">{row.title}</span>
              </div>

              <i className="ri-arrow-right-line"><RiArrowRightLine /></i>
            </a>
          </article>  
        ))}
      </div>
    </section>
  );
}
