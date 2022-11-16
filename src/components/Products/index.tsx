import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import item1 from "../../../public/images/item1.png";
import item1_1 from "../../../public/images/item1_1.png";
import item2 from "../../../public/images/item2.png";
import item2_1 from "../../../public/images/item2_1.png";
import item2_2 from "../../../public/images/item2_2.png";
import item3 from "../../../public/images/item3.png";
import item3_1 from "../../../public/images/item3_1.png";
import item4 from "../../../public/images/item4.png";
import item4_1 from "../../../public/images/item4_1.png";
import item5 from "../../../public/images/item5.png";
import item5_1 from "../../../public/images/item5_1.png";
import item6 from "../../../public/images/item6.png";
import item8 from "../../../public/images/item8.png";
import item8_1 from "../../../public/images/item8_1.png";
import item9 from "../../../public/images/item9.png";
import item10 from "../../../public/images/item10.png";
import item11 from "../../../public/images/item11.png";
import item12 from "../../../public/images/item12.png";
import item13 from "../../../public/images/item13.png";
import item13_1 from "../../../public/images/item13_1.png";
import item14 from "../../../public/images/item14.png";
import item14_1 from "../../../public/images/item14_1.png";
import item15 from "../../../public/images/item15.png";
import item16 from "../../../public/images/item16.png";
import item16_1 from "../../../public/images/item1.png";
import item16_2 from "../../../public/images/item16_2.png";
import item16_3 from "../../../public/images/item16_3.png";
import item16_4 from "../../../public/images/item16_4.png";
import item17 from "../../../public/images/item17.png";
import item18 from "../../../public/images/item18.png";
import item19 from "../../../public/images/item19.png";
import item20 from "../../../public/images/item20.png";
import item21 from "../../../public/images/item21.png";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

export default function Products({ productEn, productBr }) {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  function handleOnClickProduct(id: any, title: string) {
    var convertTitle = new URLSearchParams(title).toString();
    var convertUnderline = convertTitle.replaceAll("+", "-");

    router.push({
      pathname: `/products/${convertUnderline}`,
      query: { id },
    });
  }

  return (
    <section className="products section" id="products">
      <h2 className="section__title">{t("home_produtos")}</h2>

      <div className="products__container container swiper">
        <div className="swiper-wrapper">
          <div className="divNone" style={{ display: "none", opacity: 0 }}>
            <Image
              src={item1}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item2}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item1_1}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item2_1}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item2_2}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item3}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item3_1}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item4}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item4_1}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item5}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item5_1}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item6}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item8}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item8_1}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item9}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item10}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item11}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item12}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item13}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item13_1}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item14}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item14_1}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item15}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item16}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item16_1}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item16_2}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item16_3}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item16_4}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item17}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />

            <Image
              src={item18}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item19}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
            <Image
              src={item20}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />

            <Image
              src={item21}
              alt="testeImage"
              className="products__img"
              // style={{ display: "none" }}
            />
          </div>

          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            breakpoints={{
              1024: {
                spaceBetween: 72,
                slidesPerView: 3,
              },
            }}
            className=".products__container"
            spaceBetween={32}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
          >
            {i18n.language === "ptbr"
              ? productBr.map((row: any) => (
                  <SwiperSlide
                    key={row.id}
                    onClick={() => handleOnClickProduct(row.id, row.title)}
                    className="products__card swiper-slide"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#f5f6f8",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Image
                      src={row.imagem}
                      alt={row.title}
                      className="products__img"
                    />

                    <h2
                      className="products__title"
                      style={{ textAlign: "center" }}
                    >
                      {row.title}
                    </h2>
                    {/* <span className="products__price">{row.subtitulo}</span> */}
                  </SwiperSlide>
                ))
              : productEn.map((row: any) => (
                  <SwiperSlide
                    key={row.id}
                    onClick={() => handleOnClickProduct(row.id, row.title)}
                    className="products__card swiper-slide"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#f5f6f8",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Image
                      src={row.imagem}
                      alt={row.title}
                      className="products__img"
                    />

                    <h2
                      className="products__title"
                      style={{ textAlign: "center" }}
                    >
                      {row.title}
                    </h2>
                    {/* <span className="products__price">{row.subtitulo}</span> */}
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>

        <div className="swiper-button-next">
          <i className="ri-arrow-right-line"></i>
        </div>

        <div className="swiper-button-prev">
          <i className="ri-arrow-left-line"></i>
        </div>
      </div>
    </section>
  );
}
