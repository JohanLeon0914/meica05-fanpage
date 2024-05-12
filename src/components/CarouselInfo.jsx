import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function Carrousel() {
  const images = [
    {
      id: 1,
      url: "/assets/merch_bird.jpg",
      link: "https://shop.idol-company.com/products/meica05-birthday-merch-2024",
      description: "Merch de Cumpleaños",
    },
    {
      id: 1,
      url: "/assets/merch.png",
      link: "https://shop.idol-company.com/products/meica05-regular-collection",
      description: "Merch Oficial",
    },
    {
      id: 2,
      url: "/assets/horario.jpg",
      link: "https://twitter.com/meica05/status/1787387948628857303",
      description: "Horario Semanal",
    },
    {
      id: 3,
      url: "/assets/meica_debut.jpg",
      link: "https://www.youtube.com/watch?v=sOEEhr87PP0&t=5s",
      description: "Stream Debut",
    },
  ];
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={50}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <div>
            <img
              src={image.url}
              alt={`${image.id}`}
              className="max-h-[900px] w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-main bg-opacity-80 rounded-md p-4">
                <a href={image.link} target="_BLANK">
                  <p className="text-xl text-color_text_secund">
                    {image.description}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
