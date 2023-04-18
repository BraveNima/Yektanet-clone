//import useeffect
import { useEffect } from "react";

//import  react-router-dom
import { Link } from "react-router-dom";

//import animate on scroll package
import AOS from "aos";
import "aos/dist/aos.css";

//import components
import Button from "../../UI/Button";

const ServiceCat = ({ img, title, para, bg, leftdir, aos }) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      dir={leftdir ? "rtl" : "ltr"}
      data-aos={aos}
      data-aos-duration="1200"
      className={`${bg} bg-[#f5f5f5]  bg-cover bg-no-repeat  bg-center pt-[15px] sm:pb-[45px] py-[45px] `}
    >
      <div className="container text-right">
        <div className="flex flex-col-reverse sm:flex-row items-center ">
          <div className=" sm:w-[40%]  ">
            <img
              src={img}
              alt="person"
              className="rounded-2xl object-contain w-full h-full mt-5  "
            />
          </div>

          <div className=" flex-1 flex flex-col  sm:pr-9  ">
            <div className="sm:mt-6 pb-5 text-[#323223] text-[22px] sm:text-[30px] sm:leading-[61px] font-bold">
              <h2>{title}</h2>
            </div>
            {leftdir && (
              <div className="card-header flex gap-2">
                <Button className="text-[24px] font-bold">در وب سایت</Button>
              </div>
            )}
            <div className="" id="acordian  ">
              <div className="card">
                <div className=" pt-[15px] bg-transparent">
                  <div
                    dir="rtl"
                    className="pb-[15px]sm:pb-[35px] border-b border-b-[#ccc]"
                  >
                    <p className="sm:p-[1.25rem] p-3 leading-9 text-sm text-justify max-w-2xl text-[#5c5c5c] ">
                      {para}
                    </p>
                    <Link className=" flex justify-end ml-5 mb-10 text-[#ffb113;] text-sm font-bold ">
                      اطلاعات بیشتر
                    </Link>
                  </div>
                </div>
              </div>
              {leftdir && (
                <div className="flex flex-col  gap-1 my-4 sm:m-1">
                  <div className="card-header flex items-end gap-2">
                    <Button className="text-[24px] font-bold  text-[rgba(92,92,92,.6)]">
                      در اپلیکیشن
                    </Button>
                  </div>

                  <div className="card-header flex items-end ">
                    <Button className="text-[24px] font-bold  text-[rgba(92,92,92,.6)]">
                      در گوگل
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCat;
