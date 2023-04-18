// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";

//import components
import { TestimonialSlide } from "..";

//impoort assets
import {
  testimonialimg1,
  testimonialimg2,
  testimonialimg3,
  testimonialimg4,
  testimonialimg5,
  testimonialimg6,
  testimonialimg7,
  testimonialimg8,
} from "../../assets";

const Testimonial = () => {
  return (
    <section dir="rtl" id="testimonial" className=" bg-white py-5 sm:py-[45px]">
      <div className="container mx-auto">
        <div className="text-[22px] text-center sm:text-[36px] leading-[36px] font-bold mb-0 pt-7 pb-5 sm:pb-[95px] sm:pt-[65px]">
          <p>نظرات مشــتریان</p>
        </div>
        <Swiper
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },

            1000: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <TestimonialSlide
              name={"دانا عنایتی"}
              img={testimonialimg8}
              jobTitle={"مدیر دیجیتال مارکتینگ گروه اسنپ"}
              desc="
              درک نیاز و دغدغهٔ شرکت‌های تبلیغ‌دهنده توسط اکانت منیجرهای یکتانت یکی از بهترین مزیت‌های رقابتی این شرکت است. یکپارچگی یکتانت در مدیوم‌های مختلف تبلیغاتی به اپلیکیشن و وبسایت‌ها کمک می‌کند تا بتوانند طیف گسترده‌تر و دقیق‌تری از مخاطبان خود را   پیدا کنند.                            "
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialSlide
              name={"علیرضا باقری"}
              img={testimonialimg6}
              jobTitle={"مدیر دیجیتال مارکتینگ پول نو"}
              desc="
              با توجه به خلاقیت های مارکتینگی مورد نیازمون در پول نو، بسترهای مختلفی برای اجرای این فعالیت ها نیاز داریم که این نیازها با محصولات تیم یکتانت برطرف میشه. پشتیبانی خوب، خلاقیت و همدلی کمپین منیجرهای عزیز باعث شده که در طی این چندین سال، همکاری فعالی با هم داشته باشیم.                            "
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialSlide
              name={"مازیار رجبی تک"}
              img={testimonialimg1}
              jobTitle={"مدیر مارکتینگ بوران مارکت"}
              desc="
              مهم‌ترین مزیت رقابتی یکتانت، چتری از خدمات متنوع و کاربردی در تمامی شاخص‌ها و نقاط تماس تبلیغاتی است. در حال حاضر پلتفرم جامع یکتانت تمامی نیازهای یک کسب‌و‌کار را نه تنها برطرف می کند بلکه با تیم قوی و کارآمدی که در این مجموعه در زمینهٔ کمپین‌ها فعالیت می‌کنند کسب‌وکارها نتایج قابل توجه‌تری می‌گیرند.                            "
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialSlide
              name={"بابک سهرابی"}
              img={testimonialimg2}
              jobTitle={"بنیان‌گذار و مدیرعامل جاجیگا"}
              desc="
              چند خصوصیت بارز در یکتانت اون رو به انتخاب اول جاجیگا تبدیل کرده؛ گستردگی، تنوع ، پنل کاربری حرفه ای و گزارش دهی مناسب. و اینکه روند شناسایی نیاز مشتری و بهبود مستمر هم همیشه در یکتانت محسوس بوده. امیدوارم همین مسیر رو با کیفیت ادامه بدید و به فضای اقتصاد دیجیتال ایران خدمت کنید.                            "
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialSlide
              name={"مهدی غلامرضایی"}
              img={testimonialimg3}
              jobTitle={"بنیان‌گذار کلاسینو"}
              desc="
              یکتانت یک تیم حرفه‌ایست که هر کسب‌و‌کاری توی حوزهٔ تبلیغات فضای مجازی لاجرم باید ازش استفاده کنه تا به نتیجهٔ دلخواه برسه.                            "
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialSlide
              name={"رعنا اسدی"}
              img={testimonialimg4}
              jobTitle={" کارشناس ارشد دیجیتال مارکتینگ علی‌بابا"}
              desc="
              خدمات رسانی و پیگیری امور، همکاری با بهترین و پر‌مخاطب‌ترین رسانه‌های ایران از نقاط قوت تیم یکتانت است و همچنین توانایی و تسلط تیم به راه اندازی کمپین‌ها و آشنایی با بازار باعث شده تا با خیال راحت به این مجموعه اعتماد کنیم و در کمپین‌ها یکتانت را در کنار خودمان داشته باشیم.                            "
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialSlide
              name={"کیان دولت‌آبادی"}
              img={testimonialimg5}
              jobTitle={"کمپین دیرکتور کافه بازار"}
              desc="
              ما در تیم مون به فراخور نیاز بیزینس کمپین های مختلفی رو ران می کنیم که در بخش تبلیغات همکاری خوبی با مجموعهٔ یکتانت داریم. تا الان کمپین‌های متعددی رو اجرا کردیم که یکتانت در کنار ما بوده. یکتانت در بین شرکت‌های ایرانی فعال در حوزه تبلیغات بیشتر از همه تونسته در زمینهٔ تارگتینگ مخاطب که مهم‌ترین ابزار                            "
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialSlide
              name={"مجتبی سادات"}
              img={testimonialimg7}
              jobTitle={"مدیر مارکتینگ اکسکوینو"}
              desc="
              به عنوان یک مارکتر اینکه بین کلی سرویس و آژانس تبلیغاتی سر و کله بزنی تایم زیادی رو هدر می‌دی. یکتانت تونسته این مشکل رو با چند سرویس مختلف برطرف کنه. از همه مهم‌تر سرویس‌هاش رو با تکنولوژی‌های روز آپدیت نگه داره.                            "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
