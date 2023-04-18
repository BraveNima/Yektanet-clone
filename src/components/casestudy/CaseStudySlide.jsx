//impoer react router dom
import { Link } from "react-router-dom";

const CaseStudySlide = ({ writer, title, desc, img }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden transition-all duration-75 shadow-sm">
      <Link className="overflow-hidden block h-[200px]">
        <img
          src={img}
          alt="case study img"
          className=" w-full object-contain hover:scale-[1.1] duration-[0.5s]"
        />
      </Link>
      <div className="py-10 px-5">
        <p className="h-[60px]   font-bold sm:text-[18px] hover:text-[#ffb113;] transition-colors duration-200    ">
          <Link>{title}</Link>
        </p>
        <p className="max-w-sm pt-4 text-[15px] leading-9">{desc}</p>
      </div>
      <div className=" text-left mx-3 mb-4 text-[12px] font-light hover:text-[#ffb113;] cursor-pointer transition-colors duration-200">
        {writer}
      </div>
    </div>
  );
};

export default CaseStudySlide;
