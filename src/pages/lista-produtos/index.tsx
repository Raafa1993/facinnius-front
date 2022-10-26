import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { BiFilter } from "react-icons/bi";
import { RiArrowRightLine } from "react-icons/ri";
import Filtered from "../../components/Filtered";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ItemsData } from "../../data/ItemsData";

export default function ProductsList() {

  const router = useRouter();
  const { sexo } = router.query
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filtros, setFiltros] = useState<any>({});
  const query = router.query
  const [formData, setFormData] = useState<any>({});

  function handleOnClickProduct(id: any, title: string) {
    router.push({
      pathname: `/products/${title}`,
      query: { id },
    });
  }

  useEffect(() => {
    getFilterItems()
  }, [formData])

  console.log('router', query)
  console.log('FORMDATA', formData)

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  const getFilterItems = async () => {
    var newFilter = formData as any
    var size = 0
    for(var key in newFilter) { 
        if( newFilter[key] ){
            size++ 
        } else {
            delete newFilter[key]
        }
    }

    console.log("NEW", newFilter)

    if( size > 0 ){
        var queryString = new URLSearchParams(newFilter).toString()
        queryString += ``
        router.push({
          query: queryString
        })
        console.log("QUERY", queryString)
    }

}

  return (
    <>
      <Header />
      <Filtered
        isOpen={modal}
        handleCloseModal={() => setModal(false)}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
        formValue={formData}
      />
      <main className="main">
        <section className="quality section" id="premium">
          <div className="quality__container container">
            <div
              className="specialty__box"
              style={{ gridTemplateColumns: "1fr" }}
            >
              <h2 className="section__titleSpecialty">
                Specialty coffees that make you happy and cheer you up!
                {sexo}
              </h2>

              <div className="field-group" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3>Specialty coffees</h3>
                <div className="filterItems">
                  <button style={{ cursor: 'pointer', gap: '12px', display: 'flex', alignItems: 'center' }} className="buttonDefault specialty__button" onClick={() => setModal(!modal)}>
                    <BiFilter size={18} />
                    Filtrar itens
                  </button>
                </div>
              </div>

            </div>
          </div>

          <div
            className="new__container container grid"
            style={{ marginTop: "4rem" }}
          >
            {ItemsData.map((row) => (
              <article className="new__card"  key={row.id}>
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
      </main>
    </>
  );
}