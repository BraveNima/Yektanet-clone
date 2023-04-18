//import react-router-dom
import { Link } from "react-router-dom";

//import assets
import { yektanetrounded } from "../../assets";

//import components
import { LoginBrand, FormInput } from "..";

//import react icons
import { AiFillGoogleCircle } from "react-icons/ai";

const LoginForm = () => {
  return (
    <>
      <div className="md:block hidden">
        <LoginBrand
          img={yektanetrounded}
          brandDec={"پلتفرم تبلیغات آنلاین"}
          brandName={"یکتانت"}
          brandTo={"/"}
        />
      </div>

      <form dir="rtl" action="#" method="post ">
        <div className="border-2 border-[#ced4da] px-4 s:min-w-[350px]  sm:p-5 sm:w-[500px] m-0 ">
          <div className="text-[#000] hidden md:block text-[16px] font-semibold mt-2 mb-4 text-center ">
            ثبت‌نام
          </div>

          <div className="flex items-center justify-center gap-3  md:hidden mt-4 ss:mt-0 ">
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
              ثبت‌نام در گوگل
            </div>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 gap-y-4 mt-[40px]">
            <FormInput
              type={"text"}
              cutClassname={"cutshort"}
              label={"   نام"}
            />
            <FormInput
              type={"text"}
              cutClassname={undefined}
              label={"نام خانوادگی"}
            />
            <FormInput
              type={"email"}
              cutClassname={"cutshort"}
              label={"  ایمیل"}
            />
            <FormInput
              type={"text"}
              cutClassname={undefined}
              label={"شماره تلفن"}
            />
            <FormInput
              type={"password"}
              cutClassname={"cutshort"}
              label={"گذرواژه"}
            />
            <FormInput
              type={"password"}
              cutClassname={undefined}
              label={"تکرار گذرواژه"}
            />
          </div>
          <button
            className="w-full transition-all duration-200 hover:bg-[#0388CA] active:bg-[#0062cc] bg-[#0276AE] text-center outline-none h-[45px] mt-[20px] my-2 curosr-pointer text-[18px] text-white  "
            type="sumbit"
          >
            ثبت‌نام
          </button>
          <p className=" text-[12px] text-[#444444] mb-5">
            با ثبت نام در یکتانت ، شما با شرایط رازداری و حفظ حریم خصوصی و شرایط
            استفاده از خدمات موافقت می‌کنید.
          </p>
          <div>
            <span className="text-[#444444]">قبلا ثبت‌نام کرده‌اید؟ </span>
            <Link
              to={"/login"}
              className="text-[#007bff] visible  hover:underline relative underline-offset-8 duration-200 transition-all"
            >
              ورود به حساب کاربری
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
