import React from "react";
import FifthSection from "../Components/FifthSection";
import FirstSection from "../Components/FirstSection";
import FourthSection from "../Components/FourthSection";
import NavBar from "../Components/NavBar";
import SecondSection from "../Components/SecondSection";
import ThirdSection from "../Components/ThirdSection";

const LandingPage = () => {
  return (
    <div className="RangeForPhone:relative Laptop:overflow-x-hidden LargeLaptop:max-w-[1900px] 4kDesktop:max-w-[1900px]">
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <div className="flex items-center gap-6 w-screen justify-center py-12 LargeLaptop:pb-24 ">
        <p className="text-2xl LargeLaptop:text-3xl">Click here to</p>
        <button className="bg-PrimaryColor cursor-pointer px-[16px] py-[8px] h-fit text-white rounded-xl text-xl LargeLaptop:text-2xl font-normal LargeLaptop:font-medium active:border-0">
          Get Started
        </button>
      </div>
      <FifthSection />
    </div>
  );
};

export default LandingPage;
