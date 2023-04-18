//import assets
import { panelImg } from "../../assets";

//import react router dom
import { Link } from "react-router-dom";

const Panel = () => {
  return (
    <section dir="rtl" id="home-panelview" className=" py-[40px] sm:py-[63px] ">
      <div className="container">
        <div className="flex items-center flex-col">
          <h2 className="text-[#fed813] font-bold  text-[26px] p-5 pb-9">
            پنل یکتانت
          </h2>
          <p className="text-white text-[16px] mb-4">
            اگر می‌خواهید تنها از پنل دیدن کنید، بدون ثبت‌نام وارد دمو شوید.
          </p>
          <div className="text-center mt-5 mb-9 ">
            <img src={panelImg} alt="" />
          </div>
          <div>
            <Link className="btn-light">مشاهده دمو</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panel;
