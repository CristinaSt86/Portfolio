import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, A11y, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import css from "./NewItemsCarousel.module.css";

const NewItemsCarousel = ({ items = [], title, subtitle }) => {
  return (
    <div className={css.wrapper}>
      {title && <h3 className={css.title}>{title}</h3>}
      {subtitle && <p className={css.subtitle}>{subtitle}</p>}

      <Swiper
        modules={[Pagination, Keyboard, A11y, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          depth: 120,
          stretch: 0,
          modifier: 1,
          slideShadows: false,
        }}
        /* 🔧 Fix: fără centrare, fără auto-width */
        centeredSlides={false}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        className={css.swiper}
      >
        {items.map((it) => (
          <SwiperSlide key={it.id} className={css.slide}>
            <article className={css.card} aria-label={it.name}>
              {it.badge && <span className={css.badge}>{it.badge}</span>}
              <img src={it.img} alt={it.name} className={css.image} loading="lazy" />
              <div className={css.info}>
                <h4 className={css.name}>{it.name}</h4>
                {it.price && <div className={css.price}>{it.price}</div>}
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewItemsCarousel;
