import React, { useState } from "react";
import Logo from "../Components/ChildComponents/Logo";
import { BsFillSunFill, BsFillMoonFill, BsFillMicFill } from "react-icons/bs";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { IoTrashSharp } from "react-icons/io5";

const RecorderPage = () => {
  // microphone
  const [micStarted, setMicStarted] = useState("");

  // Play button
  const [played, setPlayed] = useState("hidden");

  // Pause button
  const [paused, setPaused] = useState("hidden");

  // Stop button
  const [stopped, setStopped] = useState("hidden");

  // Clear button
  const [cleared, setCleared] = useState("hidden");

  // theme button
  const [lightOrDark, setLightOrDark] = useState("Light"); /// Light or dark
  const [lightIcon, setLightIcon] = useState(""); /// light icon
  const [darkIcon, setDarkIcon] = useState("hidden"); /// dark icon
  const [themeTransition, setThemeTransition] = useState(
    "bg-PrimaryColor text-white"
  ); /// Movement from left to right and vise versa

  // theme button effect
  const [logoChange, setLogoChange] = useState("text-black"); /// logo
  const [backgroundChange, setBackgroundChange] = useState("bg-white"); /// recorder background
  const [visualizerBackgroundChange, setVisualizerBackgroundChange] = useState(
    "bg-white border-RecorderAscentColor"
  ); /// wave background and border
  const [visualizerChange, setVisualizerChange] = useState(""); /// wave
  const [pageTitleColor, setPageTitleColor] = useState("text-black"); /// Page Title color
  const [counterTheme, setCounterTheme] = useState(
    "bg-white border-RecorderAscentColor text-black"
  ); /// counter theme
  const [themeBtnContainer, setThemeBtnContainer] = useState("bg-white");

  // mic is click
  const onMicStart = () => {
    setMicStarted("hidden");
    setPaused("");
    setPlayed("hidden");
    setStopped("");
  };

  // recorder is stopped
  const onPlay = () => {
    if (played === "hidden") {
      setPlayed("");
      setPaused("hidden");
    } else {
      setPlayed("hidden");
      setPaused("");
      setMicStarted("hidden");
    }
  };

  // recorder is paused
  const onPause = () => {
    if (paused === "hidden") {
      setPaused("");
      setPlayed("hidden");
    } else {
      setPaused("hidden");
      setPlayed("");
      if (cleared === "hidden") {
        setMicStarted("");
      } else {
        setMicStarted("hidden");
      }
    }
  };

  // recorder is stopped
  const onStopped = () => {
    setStopped("hidden");
    setPlayed("");
    setCleared("");
    setPaused("hidden");
    setMicStarted("hidden");
  };

  // recorder is cleared
  const onCleared = () => {};

  // Theme of the recorder
  const theme = function () {
    console.log("Change");
    if (lightOrDark === "Light") {
      //// light to dark
      setThemeTransition("translate-x-[67%] text-PrimaryColor bg-white");
      setLightOrDark("Dark");
      setDarkIcon("");
      setLightIcon("hidden");
      setLogoChange("text-white");
      setBackgroundChange("bg-black");
      setVisualizerBackgroundChange("bg-white/20 border-DarkRecorderBorder");
      setPageTitleColor("text-white");
      setCounterTheme("bg-[#333333] border-DarkRecorderBorder text-white");
      setThemeBtnContainer("bg-DarkThemeBtnContainer");
    } else {
      //// dark to light
      setThemeTransition("-translate-x-[0%] bg-PrimaryColor text-white");
      setLightOrDark("Light");
      setLightIcon("");
      setDarkIcon("hidden");
      setLogoChange("text-black");
      setBackgroundChange("bg-white");
      setVisualizerBackgroundChange("bg-white border-RecorderAscentColor");
      setPageTitleColor("text-black");
      setCounterTheme("bg-white border-RecorderAscentColor text-black");
      setThemeBtnContainer("bg-white");
    }
  };

  return (
    <div
      className={`w-screen flex items-center flex-col gap-5 h-screen ${backgroundChange}`}
    >
      <div className="flex items-center justify-between w-full px-24 py-6">
        <Logo color={logoChange} />
        <div
          className={`w-[200px] rounded-full p-[4.5px] shadow-BtnboxShadow ${themeBtnContainer} `}
        >
          <div
            className={`flex items-center justify-center w-3/5 rounded-full py-[8px] gap-2 duration-[600ms] ${themeTransition}`}
            onClick={theme}
          >
            <BsFillSunFill size={28} className={`${lightIcon}`} />
            <BsFillMoonFill size={22} className={`${darkIcon}`} />
            <p className="text-xl">{lightOrDark}</p>
          </div>
        </div>
      </div>
      <h1 className={`text-4xl font-semibold mb-12 ${pageTitleColor}`}>
        Recorder
      </h1>
      <div className="w-full px-[12%]">
        <div className=" flex flex-col items-center relative">
          <p
            className={`text-2xl border-[2px] p-[6px] rounded-[4px] w-fit absolute -top-[23px] ${counterTheme}`}
          >
            0:00
          </p>
          <div
            className={`border-[2px] w-full h-[316px] rounded-[22px] ${visualizerBackgroundChange}`}
          >
            {/*  */}
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-16 gap-[72px] mb-16">
          <div className="flex items-start flex-col">
            {/* play button */}
            <div
              className={`p-[1.4rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full bg-white ${played}`}
              onClick={onPlay}
            >
              <FaPlay size={"44px"} />
            </div>
            {/* pause button */}
            <div
              className={`p-[1.4rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full bg-white ${paused}`}
              onClick={onPause}
            >
              <FaPause size={"44px"} />
            </div>
          </div>
          {/* microphone button */}
          <div
            className={`p-[1.4rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full bg-white ${micStarted}`}
            onClick={onMicStart}
          >
            <BsFillMicFill size={"72px"} />
          </div>
          <div className="flex flex-col items-center">
            {/* stop button */}
            <div
              className={`p-[1.4rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full bg-white ${stopped}`}
              onClick={onStopped}
            >
              <FaStop size={"44px"} />
            </div>
            {/* clear button */}
            <div
              className={`p-[1.4rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full bg-white ${cleared}`}
              onClick={onCleared}
            >
              <IoTrashSharp size={"44px"} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#0000000F] w-full min-h-full max-h-screen blur-sm"></div> */}
    </div>
  );
};

export default RecorderPage;
