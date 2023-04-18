//import react-router-dom
import { Link } from "react-router-dom";

// import type wrapper for changeble text
import Typewriter from "typewriter-effect";

const HomeHero = () => {
  return (
    <section id="home-hero" className="home-hero sm:h-[731px] h-[550px] ">
      {/* {|| filter over the actual img ||} */}
      <div className="video-text-bg" />
      <div className="max-w-[1130px] absolute top-[37%] right-[7%] sm:right-[14%] flex flex-col justify-end items-end z-[999] ">
        <h1 className="text-white text-2xl sm:mb-7 xs:mb-3 sm:text-4xl lg:text-5xl font-bold leading-[70px]">
          تبلیغات موفق در دنیای دیجیتال
        </h1>
        <p className="leading-[50px] text-[18px] lg:text-[32px] font-medium text-white flex items-center justify-end ">
          <span className="after_type_writting "> راحت است </span>
          <span dir="rtl" className="text-[#fed813;] ">
            <Typewriter
              options={{
                strings: [
                  "فروش ",
                  "دیجیتال مارکتینگ",
                  "کسب درآمد",
                  "تبلیغات",
                  "کسب درآمد",
                ],
                autoStart: true,
                loop: true,
                delay: "natural",
              }}
            />
          </span>
          <span className="text-center ">با یکتانت خیالتان از</span>
        </p>
        <div className="mt-[45px] z">
          <Link
            to={"/signin"}
            title="شروع کنید"
            className="btn-yellow px-3 relative cursor-pointer"
          >
            شروع کنید
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
