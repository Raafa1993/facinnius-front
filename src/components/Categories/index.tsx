import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

export default function Categories() {
  return (
    <section className="new section" id="new">
      <h2 className="section__title">New Categories</h2>

      <div className="new__container container grid">
        <article className="new__card">
          <img src="../images/new1.png" className="new__img" alt="teste" />

          <a href="#" className="new__link">
            <div className="new__data">
              <h2 className="new__title">Hoodie & Sweatshirt</h2>
              <span className="new__subtitle">Winter collection</span>
            </div>

            <i className="ri-arrow-right-line"><RiArrowRightLine /></i>
          </a>
        </article>

        <article className="new__card">
          <img src="../images/new2.png" className="new__img" alt="teste" />

          <a href="#" className="new__link">
            <div className="new__data">
              <h2 className="new__title">Pants & Jackets</h2>
              <span className="new__subtitle">Winter collection</span>
            </div>

            <i className="ri-arrow-right-line"><RiArrowRightLine /></i>
          </a>
        </article>

        <article className="new__card">
          <img src="../images/new3.png" className="new__img" alt="teste" />

          <a href="#" className="new__link">
            <div className="new__data">
              <h2 className="new__title">Coats & Coat Sets</h2>
              <span className="new__subtitle">Winter collection</span>
            </div>

            <RiArrowRightLine />
          </a>
        </article>
      </div>
    </section>
  );
}
