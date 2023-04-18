import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constans";
//import react icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { SideNav } from "..";

import {
  AiFillCiCircle,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";

//import assets
import { logo } from "../../assets";
//import Button UI
import Button from "../../UI/Button";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false); //state for show full search button
  const [nav, setnav] = useState(false);
  const [sidebarnav, setSidebarnav] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 180) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  const showInputHandler = () => {
    setShowInput(true);
  };

  return (
    <>
      <header
        className={`border-0 fixed w-full z-[1000] top-0 left-0 outline-none m-0 border-b-0  ${
          nav
            ? " bg-slate-50 shadow-md border-b-[4px] border-b-[#ffcf00]"
            : "sm:bg-[unset] bg-slate-50  border-b-[4px] border-b-[#ffcf00] sm:border-none "
        }`}
      >
        <section className="sm:px-[17px] sm:py-[25px] py-4 px-2 ]">
          <div
            className="
        }  sm:flex sm:items-center justify-between  w-full "
          >
            <div className="flex   items-start gap-4   ">
              <Link
                to={"/login"}
                className="pt-[10px] mt-[-4px] bg-[#fed813;] text-center h-[35px] sm:h-[45px] px-[9px] sm:py-[16px] font-normal text-[14px] md:text-[16px] inline-block rounded-md hover:bg-[#ffaf10b7] duration-300 transition-all  "
              >
                ورود / ثبت نام
              </Link>
              <Link
                to="tel:02145195000"
                className="bg-[#cccccc50;] flex items-center h-[35px] sm:h-[45px] px-[9px]  pt-[10px] mt-[-4px]  md:text-[16px] rounded-md "
              >
                <span className="flex gap-3 text-[13px]">
                  <BsFillTelephoneFill className=" fill-blue-400 " />
                  <span
                    className={`${
                      nav ? "text-[#5c5c5c]" : "sm:text-white text-black"
                    }`}
                  >
                    {" "}
                    021-45195000
                  </span>
                </span>
              </Link>

              {!showInput && (
                <Button
                  onClick={showInputHandler}
                  className=" h-[44px] hidden ss:block w-[45px] bg-[#cccccc50] transition-all"
                >
                  {
                    <AiOutlineSearch
                      width={"55px"}
                      className={`${
                        nav ? "fill-black" : "fill-white"
                      } demo-icon`}
                    />
                  }
                </Button>
              )}

              {showInput && (
                <form
                  method="get"
                  data-aos={showInput ? "fade-right" : ""}
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  className={`${
                    showInput ? "block" : "hidden"
                  } bg-[#cccccc50] rounded-md  `}
                >
                  <div className="flex flex-wrap relative w-full duration-500 ease-out ">
                    <input
                      placeholder=" …جستجو "
                      type="text"
                      className=" form-control  w-[45px]  border-none  bg-[#cccccc50]  placeholder:text-right outline-none text-right placeholder:text-[#495057] "
                    />
                    <span className=" absolute top-[0.7rem] left-2">
                      <Button
                        children={
                          <AiOutlineSearch className=" fill-slate-50" />
                        }
                      />
                    </span>
                  </div>
                </form>
              )}
            </div>
            {/* ////menu larg */}
            <ul className="sm:flex flex-1 justify-end flex-wrap hidden      items-center mr-3 gap-2 relative pl-6  ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    nav ? "text-[#5c5c5c]" : "text-white"
                  } font-bold`}
                >
                  <Link className="flex items-center ">
                    <TiArrowSortedDown size={20} className="fill-[#fed813]" />
                    <span className="">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 justify-end absolute top-4 right-2 sm:relative sm:top-0 sm:right-0">
              <Link to={"/"} className="lg:pl-14 pl- block">
                <img
                  src={logo}
                  alt="logo"
                  className="s:w-16 text-right md:w-full"
                />
              </Link>
              {!sidebarnav && (
                <AiOutlineMenu
                  data-aos={"fade-top"}
                  data-aos-duration="400"
                  data-aos-easing="ease-in-out"
                  onClick={() => setSidebarnav(true)}
                  size={30}
                  className={`sm:hidden ${
                    nav ? "fill-black" : " sm:fill-slate-100 fill-black"
                  } cursor-pointer`}
                />
              )}
              {sidebarnav && (
                <AiOutlineClose
                  data-aos={"fade-bottom"}
                  data-aos-duration="400"
                  data-aos-easing="ease-in-out"
                  onClick={() => setSidebarnav(false)}
                  size={30}
                  className={` sm:hidden${
                    nav ? "fill-black" : " sm:fill-slate-100 fill-black"
                  } cursor-pointer`}
                />
              )}
            </div>
          </div>
        </section>
        {sidebarnav && <SideNav />}
      </header>
    </>
  );
};

export default Navbar;
