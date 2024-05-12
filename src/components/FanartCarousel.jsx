import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export function FantartCarousel() {
  const images = [
    {
      id: 1,
      url: "/assets/fanarts/1.jpg",
      link: "https://twitter.com/thaazminchan/status/1789486942733681011",
    },
    {
      id: 2,
      url: "/assets/fanarts/2.jpg",
      link: "https://twitter.com/Feindall/status/1764465760267538486",
    },
    {
      id: 3,
      url: "/assets/fanarts/3.jpg",
      link: "https://twitter.com/barneyLad0d0/status/1787972241386279181",
    },
    {
      id: 4,
      url: "/assets/fanarts/4.jpg",
      link: "https://twitter.com/saydens_/status/1789013897795559567",
    },
    {
      id: 5,
      url: "/assets/fanarts/5.jpg",
      link: "https://twitter.com/Kimura_Senpai18/status/1789143755997827273",
    },
    {
      id: 6,
      url: "/assets/fanarts/6.jpg",
      link: "https://twitter.com/_Mewth/status/1789117606328164654",
    },
    {
      id: 7,
      url: "/assets/fanarts/7.jpg",
      link: "https://twitter.com/NotOjazaki/status/1699524469222695041",
    },
    {
      id: 8,
      url: "/assets/fanarts/8.jpg",
      link: "https://twitter.com/Kazu0_zen/status/1788758284335214851",
    },
    {
      id: 9,
      url: "/assets/fanarts/9.jpg",
      link: "https://twitter.com/airtok_710/status/1788383537747447928",
    },
    {
      id: 10,
      url: "/assets/fanarts/10.jpg",
      link: "https://twitter.com/bgmonkeyr/status/1788311665521430751",
    },
    {
      id: 11,
      url: "/assets/fanarts/11.jpg",
      link: "https://twitter.com/Soy_Salko/status/1788096622276272595",
    },
    {
      id: 12,
      url: "/assets/fanarts/12.jpg",
      link: "https://twitter.com/_MaryLenny_/status/1788025246383227033",
    },
    {
      id: 13,
      url: "/assets/fanarts/13.jpg",
      link: "https://twitter.com/PookyBooVT/status/1788014879133057484",
    },
    {
      id: 14,
      url: "/assets/fanarts/14.jpg",
      link: "https://twitter.com/Belfedium/status/1788004337416884587",
    },
    {
      id: 15,
      url: "/assets/fanarts/15.jpg",
      link: "https://twitter.com/Vs4l_s4/status/1787980016766062967",
    },
    {
      id: 16,
      url: "/assets/fanarts/16.jpg",
      link: "https://twitter.com/XDASSASSINDX_RE/status/1787744131516924347",
    },
    {
      id: 17,
      url: "/assets/fanarts/17.jpg",
      link: "https://twitter.com/GuantesBlancos_/status/1788015076730908882",
    },
  ];
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img src={image.url} alt={`Fanart ${image.id}`} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
