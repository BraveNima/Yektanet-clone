//import react-router-dom
import { Link } from "react-router-dom";

const HomeService = ({ infoImg, infoDesc, infoLink, infoTitle }) => {
  return (
    <div
      dir="rtl"
      className="flex items-center px-[40px] flex-col mx-2 mt-7 pt-[35px] pb-[20px]  bg-[rgba(196,196,196,.2)] hover:bg-[#EFEFEF] transition-all rounded-lg "
    >
      <div>
        <img src={infoImg} alt="info" className="text-center" />
      </div>
      <div className="pt-[26px] pb-[8px]">
        <h3 className="font-bold md:text-lg">{infoTitle}</h3>
      </div>
      <div className="text-right sm:text-center">
        <p className="mb-5 font-light leading-[34px] text-right text-[14px] text-[#323232] ">
          {infoDesc}
        </p>
      </div>
      <div className="">
        <Link
          className="btn-simple gap-3 duration-150 transition-all flex items-center hover:text-[#ffb113] no-underline"
          title={infoLink}
        >
          {infoLink}
        </Link>
      </div>
    </div>
  );
};

export default HomeService;
