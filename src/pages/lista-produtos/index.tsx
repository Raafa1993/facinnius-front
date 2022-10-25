import { useRouter } from "next/router";
import React, { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ModalDefault from "../../components/ModalDefault";
import { ItemsData } from "../../data/ItemsData";

export default function ProductsList() {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  function handleOnClickProduct(id: any, title: string) {
    router.push({
      pathname: `/products/${title}`,
      query: { id },
    });
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
                Specialty coffees that make you happy and cheer you up!
              </h2>

              <div className="field-group">
                <h3>Specialty coffees</h3>
                <button onClick={() => setModal(!modal)}>Filtrar</button>
              </div>
            </div>
          </div>

          <div
            className="new__container container grid"
            style={{ marginTop: "4rem" }}
          >
            {ItemsData.map((row) => (
              <article className="new__card">
                <img src={row.imagem} className="new__img" alt="teste" />

                <button
                  onClick={() => handleOnClickProduct(row.id, row.titulo)}
                  className="new__link"
                >
                  <div className="new__data">
                    <h2 className="new__title">{row.titulo}</h2>
                    <span className="new__subtitle">{row.subtitulo}</span>
                  </div>

                  <i className="ri-arrow-right-line">
                    <RiArrowRightLine />
                  </i>
                </button>
              </article>
            ))}
          </div>
        </section>
        <Footer />
        
        {modal && (
          <ModalDefault
            id="modalFilter"
            onClose={() => setModal(false)}
            visible={modal}
          >
           

           <div className="containerMo" style={{ width: '600px', height: '500px', backgroundColor: '#fff' }}>

           </div>
          </ModalDefault>
        )}
      </main>
    </>
  );
}
