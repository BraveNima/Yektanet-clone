//import components
import { LoginBrand } from "..";

///import assets
import {yektanetrounded,brandsvg,jaryanLogo,triboon,adiori, najva,} from "../../assets";

const FormLayout = () => {
  return (
    <div className=" md:border-r border-r-slate-500 px-4 w-full md:w-[40%]">
      <div className="flex flex-col items-center h-full  ">
        <img
          width={220}
          className="hidden sm:block "
          src={brandsvg}
          alt="brand"
        />
        <div className=" mb-5 text-center ">
          <div className="text-[1.25rem]">همه خدمات با یک حساب</div>
          <div className="w-[75%] text-xs mt-2.5 mx-auto">
            شما می‌توانید از یک حساب واحد برای مدیریت و ورود به همه خدمات
            یکتانت، نجوا، تریبون، جریان، ادیوری و چاوش استفاده کنید.
          </div>
        </div>
        <div className="mx-auto  px-2.5 py-[10px] flex  md:flex-col md:gap-5 items-end ">
          <LoginBrand
            img={yektanetrounded}
            brandDec={"پلتفرم تبلیغات آنلاین"}
            brandName={"یکتانت"}
            brandTo={"/"}
          />
          <LoginBrand
            img={jaryanLogo}
            brandDec={"پلتفرم تبلیغات شبکه‌های اجتماعی"}
            brandName={"جریان"}
            brandTo={"/"}
          />
          <LoginBrand
            img={najva}
            brandDec={"سرویس ریتنشن مارکتینگ"}
            brandName={"نجوا"}
            brandTo={"/"}
          />
          <LoginBrand
            img={triboon}
            brandDec={"سرویس انتشار رپورتاژ آگهی"}
            brandName={"تریبون"}
            brandTo={"/"}
          />
          <LoginBrand
            img={adiori}
            brandDec={" درآمدزایی از تبلیغات اپلیکیشن"}
            brandName={"ادیوری"}
            brandTo={"/"}
          />
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
