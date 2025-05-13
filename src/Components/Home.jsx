import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import CardGrid from "./CardGrid";
import "./Home.css";

// Import images from src/Images
import slide1 from "../Images/img1.jpg";
import slide2 from "../Images/img2.jpg";
import slide3 from "../Images/img3.jpg";
import slide4 from "../Images/img4.jpg";
import slide5 from "../Images/img5.jpg";

const slides = [
  {
    title: "Welcome to Our Website",
    desc: "Explore our amazing content and discover something new every day!",
    img: slide1,
  },
  {
    title: "Discover Great Products",
    desc: "Handpicked selections just for you.",
    img: slide2,
  },
  {
    title: "Join Our Community",
    desc: "Be part of something bigger and better.",
    img: slide3,
  },
  {
    title: "Unleash Creativity",
    desc: "Create, share, and inspire others.",
    img: slide4,
  },
  {
    title: "Stay Updated",
    desc: "Get the latest news and features first.",
    img: slide5,
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <div className="banner">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="home-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide"
                style={{
                  backgroundImage: `url(${slide.img})`,
                }}
              >
                <div className="slide-overlay">
                  <h1>{slide.title}</h1>
                  <p>{slide.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <CardGrid />
    </div>
  );
};

export default Home;
