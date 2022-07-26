import React from "react";
import Personal1 from "../../Images/jake-nackos-IF9TK5Uy-KI-unsplash-removebg-preview.png";
// import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const FourthSectionDuplicate = () => {
  return (
    <div className="Laptop:w-1/2 bg-FouthSection rounded-2xl LargeLaptop:rounded-2xl flex flex-col px-16 LargeLaptop:px-16 relative pb-7 shadow-FouthSecShadow  RangeForPhone:min-w-[240px] RangeForPhone:px-6 Laptop:px-6">
      <div className="w-32 LargeLaptop:w-32 h-fit rounded left-[-50px] LargeLaptop:left-[-50px] top-[-1px] LargeLaptop:top-[-1px] flex items-center absolute RangeForPhone:left-[-40px]">
        <figure className="w-32 LargeLaptop:w-32 h-20 LargeLaptop:h-20 rounded-lg bg-LinearBackground relative RangeForPhone:w-20 RangeForPhone:h-10">
          <img
            src={Personal1}
            alt="user"
            className="rounded-lg w-full absolute bottom-[0]"
          />
        </figure>
      </div>
      <p className="pt-28 LargeLaptop:pt-28 text-base LargeLaptop:text-base RangeForPhone:pt-16">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        quidem excepturi earum nostrum dignissimos vitae impedit ullam
        exercitationem a dolorum odit officia et, explicabo, consequuntur rerum
        sint voluptate doloremque quaerat."
      </p>
    </div>
  );
};

export default FourthSectionDuplicate;
