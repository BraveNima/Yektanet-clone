//import react-router-dom
import { Link } from "react-router-dom";

// import constans
import { footerLinks, FooterImgs } from "../../constans";

//import react icons
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

//assets
import { namad } from "../../assets";

const Footer = () => {
  return (
    <footer
      className={`flex justify-center flex-col  items-center sm:py-16 py-3  bg-[#323232]  `}
    >
      <div className="container sm:block hidden">
        <div className="pt-[45px] pb-[1.4rem] text-center">
          <div className=" w-full gap-9 flex justify-center items-center">
            {FooterImgs.map((footerimg) => (
              <div className="">
                <Link to={"/"}>
                  <img
                    className="text-lg"
                    width={70}
                    height={44}
                    src={footerimg.logo}
                    alt="site icon"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* {border} */}
      <hr className="hidden sm:block" />
      <div className={`container lg:max-w-[1240px;]  text-right  `}>
        <div className="flex-[1.5] gap-4 flex-col grid grid-cols-2   ss:flex ss:flex-row w-full justify-between flex-wrap md:mt-0 pt-[45px] ">
          <div className="w-[30%] text-right text-white md:block hidden">
            <div className="">
              <p>راه‌های ارتباطی</p>
            </div>
            <div className="flex flex-col gap-5">
              <p>
                شهرک غرب، خیابان ایران‌زمین، گلستان جنوبی، پلاک ۳۵، ساختمان
                میثاق، طبقه سه
              </p>
              <p className="grid grid-cols-2 items-start">
                <span>۰۲۱-۹۱۰۷۱۰۴۰</span>
                <span> info@yektanet.com</span>
                <span>۰۲۱-۴۵۱۹۵۰۰۰</span>
              </p>
            </div>
            <div className="socials flex gap-4 items-center float-right mt-4 ">
              <AiOutlineInstagram
                size={30}
                className=" text-[#fefefeb7] hover:text-white transition-all"
              />{" "}
              <AiFillLinkedin
                size={30}
                className=" text-[#fefefeb7] hover:text-white transition-all"
              />
              <FaTelegramPlane
                size={30}
                className=" text-[#fefefeb7] hover:text-white transition-all"
              />
            </div>
            <div className="mt-4 ">
              <img src={namad} alt="namad" />
            </div>
          </div>
          {footerLinks.map((footerlink, i) => (
            <div
              key={footerlink.title}
              className="flex gap-2 flex-col ss:my-0 my4 min-w-[100px]  text-right   "
            >
              <h4 className="font-popins font-semibold text-sm  text-[18px] leading-8 text-white">
                {footerlink.title}
              </h4>
              <ul className="mt-4 list-none ">
                {footerlink.links.map((link, i) => (
                  <li
                    className="font-popins font-light text-right  text-[14px] text-white leading-[24px] text-dimWhite hover: text-secondary cursor-pointer mb-4 hover:text-[#ffb113] duration-200 transition-all  "
                    key={link.name}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container border-t-[1px] border-t-[#3F3E45] mt-7 text-white ">
        <div className="flex items-center justify-between flex-wrap">
          <p className="sm:block hidden"> سیاست‌های حریم خصوصی</p>
          <p className="font-popins font-normal text-center text-[18px] flex leading-8 text-white">
            © ۱۴۰۰ -
            <span className="hidden md:block text-center">
              حقوق سایر محتوا برای پدیدآورنده آن محفوظ هست.
            </span>
          </p>
          <p className="sm:block hidden">طراحی شده توسط نیما </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
