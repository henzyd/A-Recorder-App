import React, { useState } from "react";
// import "./NavBar.css";
// import Logo from "../Images/Group 2.svg";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "./ChildComponents/Logo";

const NavBar = () => {
  const [openedBtn, setOpenedBtn] = useState("");
  const [closedBtn, setClosedBtn] = useState("RangeForPhone:hidden");
  const [contents, setContents] = useState("RangeForPhone:hidden");
  const onOpened = () => {
    console.log("Opened");
    setOpenedBtn("RangeForPhone:hidden");
    setClosedBtn("");
    setContents("");
  };
  const onClosed = () => {
    console.log("Closed");
    setOpenedBtn("");
    setClosedBtn("RangeForPhone:hidden");
    setContents("RangeForPhone:hidden");
  };

  return (
    <div className="nav-bar flex flex-col px-16 RangeForPhone:px-4 Laptop:px-16 Tablet:px-8 LargeLaptop:px-44 py-6 gap-2 RangeForPhone:border-b-2 RangeForPhone:pb-4 RangeForPhone:fixed RangeForPhone:top-0 RangeForPhone:right-0 RangeForPhone:left-0 RangeForPhone:bg-white RangeForPhone:z-20">
      <div className="top flex justify-between items-center relative">
        <Logo />
        <button
          className={`get-started-Laptop&Above bg-PrimaryColor cursor-pointer px-[16px] py-[8px] h-fit text-white rounded-xl text-xl font-normal active:border-0 RangeForPhone:hidden`}
        >
          <Link to={"/recorder"}>Get Started</Link>
        </button>
        <FiMenu
          className={`Laptop:hidden LargeLaptop:hidden 4kDesktop:hidden mr-3 ${openedBtn}`}
          size={30}
          onClick={onOpened}
        />
        <IoClose
          className={`Laptop:hidden LargeLaptop:hidden 4kDesktop:hidden mr-3 ${closedBtn} absolute z-20 right-0 border-2 rounded-full border-black`}
          size={30}
          onClick={onClosed}
        />
      </div>

      <ul
        className={`bottom flex items-start justify-between px-72 SmallPhones:px-20 ${contents} Laptop:px-40 RangeForPhone:flex-col RangeForPhone:gap-6 RangeForPhone:bg-white RangeForPhone:px-6 RangeForPhone:w-full RangeForPhone:h-[100vh] RangeForPhone:absolute RangeForPhone:top-[0] RangeForPhone:left-[0] z-10 RangeForPhone:items-center RangeForPhone:py-[75%] RangeForPhone:justify-center`}
      >
        <li className="text-PrimaryColor font-medium text-xl flex flex-col-reverse items-center gap-2">
          <div className="bg-PrimaryColor rounded h-[2px] w-full"></div>
          Intro
        </li>
        <li className="font-medium text-xl">How it works</li>
        <li className="font-medium text-xl">Testimony</li>
        <li className="font-medium text-xl">Contributions</li>
        <button
          className={`get-started-Tablets&Below bg-PrimaryColor cursor-pointer px-[36px] py-[12px] h-fit text-white rounded-xl text-xl font-medium active:border-0 Laptop:hidden LargeLaptop:hidden 4kDesktop:hidden`}
        >
          Get Started
        </button>
      </ul>
    </div>
  );
};

export default NavBar;
