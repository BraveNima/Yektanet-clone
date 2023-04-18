//import customres img from constans
import { Swiper, SwiperSlide } from "swiper/react";
import { customersImgs } from "../../constans";
import "swiper/css";
import "swiper/css/pagination";

const Customers = () => {
  return (
    <section id="customers" className="py-4 box-shadow">
      <div className="container mx-auto cursor-pointer">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 30,
            },

            600: {
              slidesPerView: 6,
              spaceBetween: 10,
            },

            800: {
              slidesPerView: 10,
            },
          }}
        >
          {customersImgs.map((customersImg) => (
            <SwiperSlide>
              <img
                src={customersImg.img}
                alt="customer"
                key={customersImg.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Customers;
