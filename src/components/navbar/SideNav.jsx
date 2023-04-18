import { navLinks } from "../../constans";
import { Link } from "react-router-dom";


const SidenNav = () => {
  return (
    <div
      dir="rtl"
      data-aos={"fade-down"}
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
      className={` w-full h-screen text-black fixed top-[67px] right-0 bg-white `}
    >
      <div className="w-full h-full relative ">
        <div className="w-full  h-full  border-black overflow-hidden">
          <ul className="flex w-full h-screen flex-col gap-2  items-start mr-3  relative pl-6  ">
            {navLinks.map((link) => (
              <>
                {" "}
                <div className="border-b border-blue-100 w-full p-5 pl-0 font-bold">
                  {link.title}
                </div>
                <li key={link.id} className={` font-bold`}>
                  <Link className="flex items-center gap-3 mt-10 ">
                    <input type="checkbox" className="rounded-md" />
                    <span className="">{link.title}</span>
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidenNav;
