import Image from "next/image";
import React from "react";
import Speciality1 from "../../../public/images/speciality1.png";
import Speciality2 from "../../../public/images/speciality2.png";
import Speciality3 from "../../../public/images/speciality3.png";

export default function Speciality() {
  return (
    <div className="specialty section container" id="specialty">
      <div className="specialty__container">
        <div className="specialty__box">
          <h2 className="section__titleSpecialty">
            Specialty coffees that make you happy and cheer you up!
          </h2>

          <div>
            <a href="#" className="buttonDefault specialty__button">
              See more
            </a>
          </div>
        </div>

        <div className="specialty__category">
          <div className="specialty__group specialty__line">
            <Image
              src={Speciality1}
              alt="Speciality1"
              className="specialty__img"
            />

            <h3 className="specialty__title">Selected Coffee</h3>
            <p className="specialty__description">
              We select the best premium coffee, for a true taste.
            </p>
          </div>

          <div className="specialty__group specialty__line">
            <Image
              src={Speciality2}
              alt="Speciality2"
              className="specialty__img"
            />

            <h3 className="specialty__title">Delicious Cookies</h3>
            <p className="specialty__description">
              Enjoy your coffee with some hot cookies
            </p>
          </div>

          <div className="specialty__group">
            <Image
              src={Speciality3}
              alt="Speciality3"
              className="specialty__img"
            />

            <h3 className="specialty__title">Enjoy at Home</h3>
            <p className="specialty__description">
              Enjoy the best coffee in the comfort of your home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
