import React from "react";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { ItemsData } from "../../data/ItemsData";
import { useRouter } from "next/router";

export default function Products() {
  const router = useRouter()

  function handleOnClickProduct(id: any, title: string) {
    router.push({
      pathname: `/products/${title}`,
      query: { id },
    })
  }

  return (
    <section className="products section" id="products">
      <h2 className="section__title">Best Products</h2>

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
            {ItemsData.map((row) => (
              <SwiperSlide key={row.id} onClick={() => handleOnClickProduct(row.id, row.titulo)} className="products__card swiper-slide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                {/* <article className="products__card"> */}
                  <img
                    src={row.imagem}
                    alt={row.titulo}
                    className="products__img"
                  />

                  <h2 className="products__title">{row.titulo}</h2>
                  <span className="products__price">{row.subtitulo}</span>
                {/* </article> */}
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