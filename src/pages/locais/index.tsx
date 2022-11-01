import React, { ChangeEvent, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LocalImg from "../../../public/images/sp.webp";
import Image from "next/image";
import { SelectDefault } from "../../components/SelectDefault";
import { LocaleData } from "../../data/LocaleData";

export default function Locails() {
  const [filter, setFilter] = useState('');
  const filterLocal = LocaleData.filter((obj) => obj.Cidade === filter)
  const verifiFilter = filterLocal.length <= 0 ? LocaleData : filterLocal
  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;

    setFilter(value);
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
            </div>

            <SelectDefault
              label="Locais"
              name="name"
              placeholder="Digite o local"
              id="name"
              onChange={handleSelectChange}
            >
              <option value="Americana">Americana</option>
              <option value="Campinas">Campinas</option>
              <option value="Diadema">Diadema</option>
              <option value="Dourados">Dourados</option>
              <option value="Embú das artes">Embú das artes</option>
              <option value="Goiânia">Goiânia</option>
              <option value="Guarulhos">Guarulhos</option>
              <option value="Jabaquara">Jabaquara</option>
              <option value="Mauá">Mauá</option>
              <option value="Santo André">Santo André</option>
              <option value="São Bernardo do Campo">São Bernardo do Campo</option>
              <option value="São João Del Rei">São João Del Rei</option>
              <option value="São Luís">São Luís</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Taboão da Serra">Taboão da Serra</option>

            </SelectDefault>
       
          </div>

          <div className="lojas container">
            <h2 className="font-1-xxl">
              lojas locais<span className="cor-p1">.</span>
            </h2>
            {verifiFilter.map((row) => (
              <div key={row.id} className="lojas-item">
                <Image
                  src={LocalImg}
                  width="1120"
                  height="520"
                  alt="mapa marcando o endereço em Rua Ali Perto, 35 - Rio de Janeiro - RJ"
                />
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14622.659689625338!2d-46.5836981!3d-23.6163472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c7fba38b58d%3A0x63edb00b22d11c62!2sAME%20Barradas!5e0!3m2!1spt-BR!2sbr!4v1666896128380!5m2!1spt-BR!2sbr" width="100%" height="450" style={{border: "0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                <div className="lojas-conteudo">
                  <h3 className="font-1-xl">{row.Cidade}</h3>
                  <div className="lojas-dados font-2-s cor-8">
                    <p>{row.Endereço}</p>
                    <p>{row.Salao}</p>
                  </div>
                  <div className="lojas-dados font-2-s cor-8">
                    {/* <a href="rj@bikcraft.com">{row.Telefone}</a> */}
                    <a href="tel:+552199999999">{row.Telefone}</a>
                  </div>
                  {/* <p className="lojas-tempo font-1-s">
                    <FiClock /> 08-18h de seg à dom
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
