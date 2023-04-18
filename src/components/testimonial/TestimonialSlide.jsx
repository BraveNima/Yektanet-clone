import React from "react";

const TestimonialSlide = ({ img, name, jobTitle, desc }) => {
  return (
    <div className="testimonial-slide sm:mb-16">
      <div className="flex items-center">
        <div className="">
          <img
            src={img}
            width={78}
            height={78}
            alt="person"
            className="clip-path-short"
          />
        </div>
        <div className="p-5">
          <p class="pb-4 text-sm sm:text-[16px] font-bold text-right">{name}</p>
          <p className="pb-4 text-[#212529] text-[12px] w-full sm:text-[16px]">{jobTitle}</p>
        </div>
      </div>
      <div className="text-sm leading-[24px] h-[120px] overflow-hidden text-justify  pl-[10px] pb-[10px">
        {desc}
      </div>
    </div>
  );
};

export default TestimonialSlide;
