import React from "react";

const FifthSection = () => {
  return (
    <div className="w-screen flex flex-col gap-8 RangeForPhone:pt-6">
      <div className="flex flex-col justify-center px-52 Laptop:px-9 RangeForPhone:px-[24px]">
        <div className="flex flex-row justify-center gap-28 pb-16 RangeForPhone:grid RangeForPhone:grid-cols-2 RangeForPhone:gap-x-6 RangeForPhone:gap-y-6">
          {/* Get Started */}
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-medium">Get Started</h1>
            <div className="flex flex-col items-start gap-1">
              <p className="text-base font-normal">Lorem ipsum dolor</p>
              <p className="text-base font-normal">Lorem ipsum </p>
              <p className="text-base font-normal">Lorem ipsum dolor</p>
              <p className="text-base font-normal">Lorem ipsum</p>
              <p className="text-base font-normal">Lorem ipsum dolor</p>
              <p className="text-base font-normal">Lorem</p>
            </div>
          </div>

          {/* Companies */}
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-medium">Companies</h1>
            <div className="flex flex-col items-start gap-1">
              <p className="text-base font-normal">Lorem ipsum dolor</p>
              <p className="text-base font-normal">Lorem ipsum </p>
              <p className="text-base font-normal">Lorem ipsum dolor</p>
              <p className="text-base font-normal">Lorem ipsum</p>
            </div>
          </div>

          {/* Blog */}
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-medium">Blog</h1>
            <div className="flex flex-col items-start gap-1">
              <p className="text-base font-normal">Lorem ipsum dolor</p>
              <p className="text-base font-normal">Lorem ipsum </p>
              <p className="text-base font-normal">Lorem ipsum dolor</p>
              <p className="text-base font-normal">Lorem ipsum</p>
              <p className="text-base font-normal">Lorem ipsum dolor</p>
              <p className="text-base font-normal">Minima reprehenderit</p>
              <p className="text-base font-normal">Lorem</p>
            </div>
          </div>

          {/* About */}
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-medium">About</h1>
            <div className="flex flex-col items-start gap-1">
              <p className="text-base font-normal">Lorem ipsum dolor</p>
              <p className="text-base font-normal">Lorem ipsum </p>
              <p className="text-base font-normal">Lorem ipsum dolor</p>
              <p className="text-base font-normal">Lorem ipsum</p>
              <p className="text-base font-normal">Lorem ipsum dolor</p>
              <p className="text-base font-normal">Lorem</p>
            </div>
          </div>
        </div>

        {/* Seprating line */}
        <div className="bg-zinc-400 h-[2px]"></div>
      </div>

      {/* My Initials */}
      <div className="bg-BG text-white flex justify-between items-start pt-6 pb-12 px-12 text-lg font-semibold RangeForPhone:px-[0px] RangeForPhone:text-center LargePhones:px-4 Tablet:px-10">
        <p>Powered by ZYD Code</p>
        <p>@henzyd owner of Clekk</p>
      </div>
    </div>
  );
};

export default FifthSection;
