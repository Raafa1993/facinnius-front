import Image from "next/image";
import Link from "next/link";
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
            Produtos especiais para cuidar de você!
          </h2>

          <div>
            <Link href="/lista-produtos">
              <a className="buttonDefault specialty__button">
                Veja mais
              </a>
            </Link>
          </div>
        </div>

        <div className="specialty__category">
          <div className="specialty__group specialty__line">
            <Image
              src={Speciality1}
              alt="Speciality1"
              className="specialty__img"
            />

            <h3 className="specialty__title">Linhas premium</h3>
            <p className="specialty__description">
              linahs premium esperando por você.
            </p>
          </div>

          <div className="specialty__group specialty__line">
            <Image
              src={Speciality2}
              alt="Speciality2"
              className="specialty__img"
            />

            <h3 className="specialty__title">Qualidade</h3>
            <p className="specialty__description">
              Aproveite e desfrute do melhor que a Faccinus oferece.
            </p>
          </div>

          <div className="specialty__group">
            <Image
              src={Speciality3}
              alt="Speciality3"
              className="specialty__img"
            />

            <h3 className="specialty__title">Tecnologia</h3>
            <p className="specialty__description">
              Todas as nossas linhas oferecem produtos de qualidade
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
