import React from "react";
// import BgImage from "../Images/Group 38.png";
import FourthSectionDuplicate from "./ChildComponents/FourthSectionDuplicate";

const FourthSection = () => {
  return (
    <div className="flex items-center flex-col w-screen mt-6 LargeLaptop:mt-6 bg-BG px-20 LargeLaptop:px-20 py-11 LargeLaptop:py-14 gap-12 LargeLaptop:gap-10 RangeForPhone:px-2">
      <h1 className="text-white font-bold text-center LargeLaptop:font-bold text-3xl LargeLaptop:text-3xl RangeForPhone:px-12 RangeForPhone:text-[28px]">
        What people say about us
      </h1>
      <div className="flex items-center gap-28 LargeLaptop:gap-28 px-36 LargeLaptop:px-36 pt-16 LargeLaptop:pt-16 RangeForPhone:grid RangeForPhone:grid-cols-1 RangeForPhone:px-12 RangeForPhone:gap-24 RangeForPhone:pl-[9.4] Tablet:px-24 Laptop:px-6">
        <FourthSectionDuplicate />
        <FourthSectionDuplicate />
      </div>
    </div>
  );
};

export default FourthSection;
