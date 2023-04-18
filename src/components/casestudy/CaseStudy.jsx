//import components
import { CaseStudySlide } from "..";

//import assets
import { casestudy1, casestudy2, casestudy3 } from "../../assets";

const CaseStudy = () => {
  return (
    <section
      dir="rtl"
      id="home-casestudy"
      className="bg-[#efefef] py-[40px] sm:py-[62px] bg-cover bg-no-repeat"
    >
      <div className="container max-w-lg">
        <div className="text-center sm:text-[36px] font-bold mb-5 sm:mb7  ">
          <p>داستان موفقیت برخی از شرکت‌هایی که به یکتانت اعتماد کرده‌اند</p>
        </div>
        <div className="grid grid-cols-1  ss:grid-cols-2 md:grid-cols-3 ss:gap-x-6 gap-y-10">
          <CaseStudySlide
            img={casestudy1}
            title={"افزایش ۴۵ برابری نرخ تبدیل  «هلواکس» با یکتانت"}
            desc="                هلواکس یک صرافی ارز دیجیتال است و در زمینهٔ خرید و فروش ارز
            دیجیتال فعالیت دارد. این شرکت همکاری خود..."
            writer={"سها کاکا  "}
          />
          <CaseStudySlide
            img={casestudy2}
            title={"چگونه «چرم کیهان» با یکتانت به افزایش لید رسید؟ "}
            desc="
            گروه تولیدی چرم کیهان فعالیت خود را با رویکرد تولید محصولات چرمی با کیفیت از اوایل دهه نود آغازنموده است...			"
            writer={"سها کاکا  "}
          />
          <CaseStudySlide
            img={casestudy3}
            title={"مسیری که «فیت کلاب» با کمک یکتانت در آن قدم گذاشت "}
            desc="
            فیت‌کلاب با بهره‌گیری از تیمی متخصص، به‌صورت حضوری و غیرحضوری به مشتریان خود کمک می‌کند تا برای داشتن بدنی سالم...			"
            writer={"سها کاکا  "}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
