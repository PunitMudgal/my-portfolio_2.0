import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { ProjectData } from "../constants/ProjectData.js";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  title,
  description,
  tags,
  img,
  code,
  liveLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 550,
        }}
        className="bg-tertiary p-5 rounded-2xl w-[360px] sm:w-full border-2 border-cyan-900"
      >
        <div className="relative w-full h-[230px] ">
          <img
            src={img}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl border border-gray-600"
          />

          {/* code link */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(code, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          {/* live link */}
          <div className="absolute right-0 bottom-0 flex justify-end m-1 card-img_hover">
            <div
              onClick={() => window.open(liveLink, "_blank")}
              className="w-12 h-12 hover:bg-rose-300 rounded-full flex cursor-pointer"
            >
              <img src={live} alt="source code" className=" object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${title}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="work">
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[16px] max-w-3xl leading-[28px]"
        >
          The following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it.
          <br />
          Feel free to browse through my work.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {ProjectData.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");
