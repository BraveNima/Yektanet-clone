//import assets
import { serviceCatHuman1, serviceCatHuman2 } from "../../assets";

//import components
import ServiceCat from "./ServiceCat";

const Services = () => {
  return (
    <>
      <ServiceCat
        img={serviceCatHuman1}
        title={"تبلیغات"}
        para={
          "از آنجایی که در حال حاضر بیش از ۱۲۰ میلیون کاربر در فضای وب وجود دارد، فرصت خوبی برای همه‌ی کسب‌وکارها است تا از ظرفیت نمایش یکتانت استفاده کنند. با استفاده از تبلیغات در بستر وب، نه تنها می‌توانید نام و آوازه‌ی کسب‌وکارتان را به گوش افراد بسیاری برسانید، بلکه می‌توانید روز به روز فروش و ورودی وب‌سایت‌تان را نیز افزایش دهید."
        }
        bg={"servicecat1-banner "}
        leftdir={true}
        aos="fade-upt"
      />
      <ServiceCat
        img={serviceCatHuman2}
        title={"درآمدزایی"}
        para={
          "اگر روزانه بیش از ۱۰ هزار بازدیدکننده به وب‌سایت شما سر می‌زنند، این یک فرصت بزرگ برای شماست. به جمع ناشرین یکتانت بپیوندید و درآمد پایدار را تجربه کنید."
        }
        bg={"servicecat2-banner "}
        dir="left"
        aos="fade-upt"
      />
    </>
  );
};

export default Services;
