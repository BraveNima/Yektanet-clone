import { HomeService } from "../../components";

// import assets
import { infoImg1, infoImg2 } from "../../assets";

const HomeServices = () => (
  <section className="pb-[20px] sm:pb-11" dir="rtl">
    <div className="container max-w-md xs:max-w-3xl">
      <div className="flex sm:flex-row flex-col   w-full md:mx-auto m-0  justify-center items-start ">
        <HomeService
          infoImg={infoImg2}
          infoDesc={
            "با یکتانت، تبلیغات خود را به دست میلیون‌ها کاربر برسانید! ما به شما کمک می‌کنیم با اجرای کمپین‌های مؤثر، فروش خود را افزایش دهید، نام خود را سر زبان‌ها بیندازید و توجه مشتریان راغب بیشتری را جلب کنید."
          }
          infoTitle={"تبلیغات"}
          infoLink={"اطلاعات بیشتر"}
        />
        <HomeService
          infoImg={infoImg1}
          infoDesc={
            "یکی از راه‌های کسب‌ درآمد داشتن مخاطب است. با استفاده از تبلیغات یکتانت، زمان و انرژی‌ای را که برای جذب مخاطبان وب‌سایت، اپلیکیشن یا صفحات اجتماعی خود صرف کرده‌اید، به درآمد تبدیل کنید."
          }
          infoTitle={"درآمدزایی"}
          infoLink={"اطلاعات بیشتر"}
        />
      </div>
    </div>
  </section>
);
export default HomeServices;
