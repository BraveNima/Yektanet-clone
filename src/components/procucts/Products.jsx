// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProductsItem from "./ProductsItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules from swiper
import { Autoplay, Navigation } from "swiper";
import { productsimg1, productsimg2 } from "../../assets";

const Products = () => {
  return (
    <section id="home-products" className="">
      <div className="container mx-auto pb-[45px] overflow-hidden max-w-lg">
        <div className="text-bold py-8 sm:py-[66px] mb-0 sm:leading-[36px] text-center">
          <h2 className="md:text-[36px] font-bold">جدیدترین خدمات</h2>
        </div>
        <Swiper
          navigation={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          className="mySwiper shadow-lg bg-white rounded-xl "
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <ProductsItem
              para={
                "آقایان علاقه‌مند به گردشگری یا خانم‌های علاقه‌مند به تکنولوژی؟ فرقی نمی‌کند! مخاطب شما در هر دسته‌ی رفتاری که باشد، می‌توانید بین ۱۲۰ میلیون کاربر وب پیدایش کنید و خودتان بیننده‌ی تبلیغتان را انتخاب کنید."
              }
              title={"تبلیغات رفتارمحور"}
              img={productsimg1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem
              title={"تبلیغات محصول محتوامحور"}
              para="به سطح جدیدی از تبلیغات موثر خوش آمدید!
تبلیغات محصول محتوامحور یعنی تبلیغ  در صفحه‌هایی نمایش داده می‌شود که محتوای آن ارتباط نزدیکی با محصول شما دارد. با این کار، تبلیغ را افرادی می‌بینند که به آن نیاز دارند.
"
              img={productsimg2}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Products;
