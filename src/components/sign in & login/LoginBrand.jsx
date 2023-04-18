import React from "react";
import { Link } from "react-router-dom";

const LoginBrand = ({ img, brandName, brandDec, brandTo }) => {
  return (
    <Link to={brandTo} className="block">
      <div className="flex items-center gap-3 ">
        <div className=" items-center gap-1 hidden  md:flex ">
          <span>{brandDec}</span>
          <span className="font-semibold block">{brandName}</span>
        </div>
        <div
          className={`relative transition-all rounded-full md:border-2 border-[#777] mb-4 md:blick w-20 p-4`}
        >
          <img src={img} alt="logo" className="w-10" />
        </div>
      </div>
    </Link>
  );
};

export default LoginBrand;
