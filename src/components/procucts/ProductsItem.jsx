//import react router dom
import { Link } from "react-router-dom";

const ProductsItem = ({ para, title, img }) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between sm:text-right text-center overflow-hidden  ">
      <div className=" mx-auto sm:min-h-full clip-path">
        <img
          src={img}
          alt="products"
          className="swiper-img w-[90%] rounded-lg "
        />
      </div>

      <div className=" px-4 py-12 md:py-[45px] md:px-[100px]">
        <h2 className="font-semibold sm:text-[36px] text-[16px] sm:leading-[61px] mb-1">
          {title}
        </h2>
        <p className="max-w-[536px] leading-[36px] text-sm font-thin mb-7 sm:mb4 ">
          {para}
        </p>
        <div>
          <Link className="btn-yellow hover:bg-[#2fbeaa] hover:text-black duration-100 transition  relative cursor-pointer ">
            اطلاعات بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
