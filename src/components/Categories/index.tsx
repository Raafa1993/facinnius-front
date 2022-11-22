import Image from "next/image";
import Link from "next/link";
import { faker } from "@faker-js/faker";
import { useTranslation } from 'react-i18next'
import { RiArrowRightLine } from "react-icons/ri";
import Accordion from "../Accordion";

const data = Array.from({ length: 200 }, () => {
  return {
    id: faker.datatype.uuid(),
    title: faker.hacker.noun(),
    content: faker.hacker.phrase(),
  };
});

// create type if you need intellisense
type CompProps = typeof data[0] & {
  isOpen: boolean;
  onClick: (txt: string) => void;
};

// all the props get passed here with isOpen
const SummaryComponent = ({ title, isOpen }: CompProps) => (
  <div className="header">
    {title} <span className={(isOpen ? "open" : "") + " chevron"}>👇</span>
  </div>
);

// component will get wrapped in <div class="acc-content">
const DetailComponent = ({ content, onClick }: CompProps) => (
  <p onClick={() => onClick(content)}>{content}</p>
);

export default function Categories({ lineBr, lineEn }) {
  const { t, i18n } = useTranslation();

  const isBr = i18n.language === 'ptbr' ? lineBr : lineEn

  return (
    <section className="new section" id="new">
      <h2 className="section__title">{t('home_linhas_produtos_title')}</h2>

      <div className="new__container container grid">

          {isBr.map((row: any) => (
            <article key={row.id} className="new__card">
              <Image src={row.imagem} className="new__img" alt="teste" />

                <Link href="/lista-produtos" className="new__link">
                  <a className="new__link">
                    <div className="new__data">
                      <h2 className="new__title">{row.title}</h2>
                      <span className="new__subtitle">{row.title}</span>
                    </div>

                    <i className="ri-arrow-right-line"><RiArrowRightLine /></i>
                  </a>
                </Link>
            </article>  
          ))}

      <Accordion
        items={data}
        // you can pass any props,
        // it will be passed to the Detail & Summary
        onClick={(txt: string) => alert("You clicked on\n" + txt)}
        // set it to false if you want only one accordion to open
        multiExpand={true}
        SummaryComponent={SummaryComponent}
        DetailComponent={DetailComponent}
      />
  
      </div>
    </section>
  );
}
