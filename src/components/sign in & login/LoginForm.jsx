//import react-router-dom
import { Link } from "react-router-dom";

//import assets
import { yektanetrounded } from "../../assets";

//import components
import { LoginBrand, FormInput } from "..";

//import react icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillGoogleCircle, AiOutlineMail } from "react-icons/ai";

const LoginForm = () => {
  return (
    <div className="flex items-center flex-col flex-wrap gap-3">
      <div className="md:block hidden">
        <LoginBrand
          img={yektanetrounded}
          brandDec={"پلتفرم تبلیغات آنلاین"}
          brandName={"یکتانت"}
          brandTo={"/"}
        />
      </div>

      <form dir="rtl" action="#" method="post " className="flex justify-center">
        <div className="border-2 border-[#ced4da] min-w-[375px] p-4 sm:w-[450px] m-0 ">
          <div className="text-[#000] hidden md:block text-[16px] font-semibold mt-2 mb-4 text-center ">
            ورود
          </div>

          <div className="flex items-center justify-center gap-3  md:hidden  ">
            <div
              className={`relative transition-all rounded-full border-2 border-[#777] mb-4 p-2  w-15 `}
            >
              <img src={yektanetrounded} alt="logo" className="w-9" />
            </div>
            <p className="font-normal pb-3 text-[#333] block">ورود به یکتانت</p>
          </div>

          <Link className="bg-[#4285F4] flex items-center  mb-1 relative  h-11 text-center  ">
            <div className=" absolute left-0 p-2 ">
              <AiFillGoogleCircle size={35} className="fill-white" />
            </div>
            <div className="absolute text-white left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ">
              ورود با گوگل
            </div>
          </Link>
          <FormInput
            type={"text"}
            label={"ایمیل یا شماره تلفن"}
            cutClassname={"cutlong"}
            className="mt-[40px]"
          />
          <FormInput
            type={"text"}
            label={"گذرواژه"}
            cutClassname={undefined}
            className="mt-[40px]"
          />
          <button
            className="w-full transition-all duration-200 hover:bg-[#0388CA] active:bg-[#0062cc] bg-[#0276AE] text-center outline-non h-[45px] mt-[38px] mb-7 curosr-pointer text-[18px]  "
            type="sumbit"
          >
            ورود
          </button>
          <div className="flex items-center justify-between">
            <Link className="text-[#007bff] visible  hover:underline relative underline-offset-8 duration-200 transition-all ">
              بازیابی گذرواژه
            </Link>
            <Link
              to={"/signin"}
              className="text-[#007bff] visible hover:underline relative underline-offset-8 duration-200 transition-all "
            >
              ثبت‌نام
            </Link>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-between w-full  p-4 sm:p-5 gap-6 ">
        <div className="flex items-center">
          <AiOutlineMail />
          <Link
            className="pl-1 text-[#0000009b] bg-white hover:underline relative underline-offset-2 duration-200 transition-all"
            to="mailto:info@yektanet.com"
          >
            info@yektanet.com
          </Link>
        </div>

        <div className="flex items-center p3 ">
          <BsFillTelephoneFill />
          <Link
            to="tel:02145195000"
            className="hover:underline relative underline-offset-2 duration-200 transition-all"
          >
            021-45195000
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
