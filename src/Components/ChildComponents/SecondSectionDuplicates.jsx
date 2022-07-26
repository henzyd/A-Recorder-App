import React from "react";
import { FaPlay } from "react-icons/fa";

const SecondSectionDuplicates = (props) => {
  return (
    <div className="flex items-start gap-3 flex-col">
      <div className="flex items-center gap-3 pl-12">
        <div
          className={`${
            props.Padding || "p-3"
          } border-[3px] border-Grey rounded-full flex items-center`}
        >
          {props.Icon || <FaPlay fill="#FF006B" size={26} />}
        </div>
        <p className="font-semibold text-2xl">{props.Title || "Play"}</p>
      </div>
      <p className="text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ipsum
        eget arcu turpis semper tincidunt vulputate eu. Feugiat ut elit odio
        aliquet odio dolor ultrices mattis. In at odio placerat cras amet duis
        odio sit. Tellus enim nunc urna sed.
      </p>
    </div>
  );
};

export default SecondSectionDuplicates;
