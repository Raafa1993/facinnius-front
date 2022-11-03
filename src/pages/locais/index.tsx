import React, { ChangeEvent, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { SelectDefault } from "../../components/SelectDefault";
import { useTranslation } from "react-i18next";
import { GetStaticProps } from "next";
import { getlocal } from "../../lib/locais";

export default function Locails({ locais }) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('');
  const filterLocal = locais.filter((obj) => obj.Cidade === filter)
  const verifiFilter = filterLocal.length <= 0 ? locais : filterLocal
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
                {t('locais_titulo')}
              </h2>
            </div>

            <SelectDefault
              label={t('locais_label')}
              name="name"
              id="name"
              onChange={handleSelectChange}
            >
              <option value="0">{t('locais_option')}</option>
              {locais.map((row: any) => (
                <option key={row.id} value={row.Cidade}>{row.Cidade}</option>
              ))}
            </SelectDefault>
       
          </div>

          <div className="lojas container">
            <h2 className="font-1-xxl">
              {t('locais_subtitulo')}<span className="cor-p1">.</span>
            </h2>
            {verifiFilter.map((row) => (
              <div key={row.id} className="lojas-item">

                <div className="maps" dangerouslySetInnerHTML={{ __html: row.iframe }}/> 
                
                <div className="lojas-conteudo">
                  <h3 className="font-1-xl">{row.Cidade}</h3>
                  <div className="lojas-dados font-2-s cor-8">
                    <p>{row.Endereço}</p>
                    <p>{row.Salao}</p>
                  </div>
                  <div className="lojas-dados font-2-s cor-8">
                    <a href="tel:+552199999999">{row.Telefone}</a>
                  </div>
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

export const getStaticProps: GetStaticProps = async () => {
  const locais = getlocal();

  return {
    props: {
      locais,
    }
  }
}