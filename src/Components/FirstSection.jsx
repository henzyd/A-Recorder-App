import React, { useState } from "react";
import SlideImage1 from "../Images/undraw_Recording_re_5xyq 1.png";
import SlideImage2 from "../Images/Online interview.png";
import SlideImage3 from "../Images/Man hosting a podcast.png";
import BgImage from "../Images/Group 15.png";

const FirstSection = () => {
  const slider = [SlideImage1, SlideImage2, SlideImage3];
  const [mainPic, setMainPic] = useState(SlideImage1);
  // let y = "";
  // const centeredPic = (index) => {
  //   setMainPic(index);
  // };
  setTimeout(() => {
    if (mainPic === slider[0]) {
      setMainPic(slider[1]);
    } else if (mainPic === slider[1]) {
      setMainPic(slider[2]);
    } else if (mainPic === slider[2]) {
      setMainPic(slider[0]);
    }
  }, 4000);
  // NOTE: position reletive in the div not in the landing page
  return (
    <div className="flex flex-col items-center relative gap-12">
      <h1 className="text-4xl font-bold RangeForPhone:text-3xl RangeForPhone:pt-32 RangeForPhone:text-center LargePhones:px-7">
        Clerkk: The Online Recorder
      </h1>
      <img
        src={BgImage}
        alt="Background img"
        className="w-full absolute -z-[1] bottom-10 RangeForPhone:bottom-[12rem] Tablet:bottom-32"
      />
      <div className="w-1/3 Laptop:w-[512px] LargeLaptop:w-[600px] RangeForPhone:w-[300px] bg-white px-12 RangeForPhone:px-5 rounded-3xl shadow-SliderBackgroundShadow flex items-center flex-col Tablet:w-[400px]">
        <figure className="RangeForPhone:w-[260px] RangeForPhone:h-[260px] Laptop:w-[460px] flex items-center justify-center">
          <img src={mainPic} alt="Illustration Slides" />
        </figure>
        <h4 className="font-bold text-lg pt-3 text-center">
          The power is yours do as you please
        </h4>
        <p className="text-base text-center pt-1 pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          sit mauris risus. Ante eget ultrices vivamus scelerisque massa. In
          eleifend egestas.
        </p>
      </div>
    </div>
  );
};

export default FirstSection;
