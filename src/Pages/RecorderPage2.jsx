import React, { useState, useEffect, useRef } from "react";
import Logo from "../Components/ChildComponents/Logo";
import { BsFillSunFill, BsFillMicFill } from "react-icons/bs";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { IoTrashSharp } from "react-icons/io5";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import WaveSurfer from "wavesurfer.js";

const RecorderPage = () => {
  const [micStarted, setMicStarted] = useState("");
  const [played, setPlayed] = useState("hidden");
  const [paused, setPaused] = useState("hidden");
  const [stopped, setStopped] = useState("hidden");
  const [cleared, setCleared] = useState("hidden");
  const [state, setState] = useState(null);
  const [waveFormLoaded, setWaveformLoaded] = useState(false);
  const websurfer = useRef(null);

  useEffect(() => {
    websurfer.current = WaveSurfer.create({
      container: ".audio",
      waveColor: "violet",
      progressColor: "purple",
      barWidth: 2,
    });
  });

  //   websurfer.current.on("ready", () => {
  //     setWaveformLoaded(true);
  //   });

  // mic is click
  const onMicStart = () => {
    setState(RecordState.START);
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
      //   setState(RecordState.PLAY);
      websurfer.current.playPause();
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
        setState(RecordState.PAUSE);
      } else {
        setMicStarted("hidden");
        websurfer.current.pause();
      }
    }
  };
  const onStop = (audioData) => {
    websurfer.current.load(audioData);
    console.log("audioData", audioData);
  };

  // recorder is stopped
  const onStopped = () => {
    setStopped("hidden");
    setPlayed("");
    setCleared("");
    setPaused("hidden");
    setMicStarted("hidden");
    setState(RecordState.STOP);
  };

  // recorder is cleared
  const onCleared = () => {};
  return (
    <div className="w-screen flex items-center flex-col gap-5">
      <div className="flex items-center justify-between w-full px-24 py-6">
        <Logo />
        <div className="w-[200px] rounded-full p-[4.5px] shadow-BtnboxShadow">
          <div className="flex items-center justify-center bg-PrimaryColor w-3/5 text-white rounded-full py-[8px] gap-2">
            <BsFillSunFill size={28} />
            <p className="text-xl">Light</p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-semibold mb-12">Recorder</h1>
      <div className="w-full px-[12%]">
        <div className=" flex flex-col items-center relative">
          <p className="text-2xl border-[2px] border-RecorderAscentColor p-[6px] rounded-[4px] w-fit absolute bg-white -top-[23px] audio ">
            0:00
          </p>
          <div className="border-[2px] border-RecorderAscentColor w-full h-[316px] rounded-[22px]">
            <AudioReactRecorder state={state} onStop={onStop} />
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-16 gap-[72px]">
          <div className="flex items-start flex-col">
            {/* play button */}
            <div
              className={`p-[1.4rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full ${played}`}
              onClick={onPlay}
            >
              <FaPlay size={"44px"} />
            </div>
            {/* pause button */}
            <div
              className={`p-[1.4rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full ${paused}`}
              onClick={onPause}
            >
              <FaPause size={"44px"} />
            </div>
          </div>
          {/* microphone button */}
          <div
            className={`p-[1.4rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full ${micStarted}`}
            onClick={onMicStart}
          >
            <BsFillMicFill size={"72px"} />
          </div>
          <div className="flex flex-col items-center">
            {/* stop button */}
            <div
              className={`p-[1.4rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full ${stopped}`}
              onClick={onStopped}
            >
              <FaStop size={"44px"} />
            </div>
            {/* clear button */}
            <div
              className={`p-[1.4rem] text-PrimaryColor flex items-center justify-center shadow-RocorderControlBtnBoxShadow rounded-full ${cleared}`}
              onClick={onCleared}
            >
              <IoTrashSharp size={"44px"} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0000000F] w-full min-h-full max-h-screen blur-sm"></div>
    </div>
  );
};

export default RecorderPage;
