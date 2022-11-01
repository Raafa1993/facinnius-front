import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ImageColection1 from '../../../public/images/collection1.png'
import ImageColection2 from '../../../public/images/collection2.png'
import { RiArrowRightLine } from "react-icons/ri";

export default function Collection() {
  const router = useRouter()

  function handleOnClickProduct(typo: any) {
    router.push({
      pathname: `/lista-produtos/`,
      query: { sexo: typo },
    })
  }
  return (
    <section className="collection section" id="collection">
      <div className="collection__container container">
        <div className="collection__explore">
          <div className="collection__data-men">
            <h2 className="collection__title">
              Produtos <br />
              Masculinos
            </h2>
            <button onClick={() => handleOnClickProduct('masculino')} className="button__link">
              Veja mais <i className="ri-arrow-right-line"><RiArrowRightLine /></i>
            </button>
          </div>

          <Image src={ImageColection1} alt="collection image" />
        </div>

        <div className="collection__explore">
          <Image src={ImageColection2} alt="collection image" />

          <div className="collection__data-women">
            <h2 className="collection__title">
              Produtos <br />
              Femininos
            </h2>
            <button onClick={() => handleOnClickProduct('feminino')} className="button__link">
              Veja mais <i className="ri-arrow-right-line"><RiArrowRightLine /></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
