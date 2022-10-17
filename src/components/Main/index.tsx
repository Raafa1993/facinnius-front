import Image from "next/image";
import React from "react";
import HomeImg1 from '../../../public/images/home1.png'
import HomeImg2 from '../../../public/images/home2.png'

export default function Main() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">
            New Clothing <br />
            Collection
          </h1>

          <p className="home__description">
            The new collection of clothing from <br />
            the best brands this year.
          </p>

          <a href="#new" className="button__link">
            Explore <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        <div className="home__images">
          <img src='../images/home1.png' alt="teste" />
          <img src='../images/home2.png' alt="teste" />
        </div>
      </div>
    </section>
  );
}
