import React from "react";

import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <h3 className={`${styles.sectionSubText} text-start `}>My Skills</h3>
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} title={technology.name} />
          <p className="text-center text-sm font-extralight text-cyan-500 capitalize">
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
