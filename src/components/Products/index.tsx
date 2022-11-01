import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Products({ productEn, productBr }) {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  function handleOnClickProduct(id: any, title: string) {
    var convertTitle = new URLSearchParams(title).toString();
    var convertUnderline = convertTitle.replaceAll("+", "-");

    router.push({
      pathname: `/products/${convertUnderline}`,
      query: { id },
    })
  }

  return (
    <section className="products section" id="products">
      <h2 className="section__title">{t('home_produtos')}</h2>

      <div className="products__container container swiper">
        <div className="swiper-wrapper">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            breakpoints={{
              1024: {
                spaceBetween: 72,
                slidesPerView: 3
              }
            }}
            className=".products__container"
            spaceBetween={32}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
          >

            {i18n.language === 'ptbr' ? (
              productBr.map((row: any) => (
                <SwiperSlide key={row.id} onClick={() => handleOnClickProduct(row.id, row.title)} className="products__card swiper-slide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Image
                      src={row.imagem as any}
                      alt={row.title}
                      className="products__img"
                    />

                    <h2 className="products__title">{row.title}</h2>
                    {/* <span className="products__price">{row.subtitulo}</span> */}
                </SwiperSlide>
              ))
            ) : (
              productEn.map((row: any) => (
                <SwiperSlide key={row.id} onClick={() => handleOnClickProduct(row.id, row.title)} className="products__card swiper-slide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Image
                      src={row.imagem as any}
                      alt={row.title}
                      className="products__img"
                    />
  
                    <h2 className="products__title">{row.title}</h2>
                    {/* <span className="products__price">{row.subtitulo}</span> */}
                </SwiperSlide>
              ))
            )}
            
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
