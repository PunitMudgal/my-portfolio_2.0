import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";

function Hero() {
  return (
    <div className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-red-700" />
          <div className="w-1 h-80 md:h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <br /> <span className="text-red-700">Punit Sharma</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Developer, user <br className="block md:hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* computer  */}
      <ComputersCanvas />

      <div className="absolute bottom-8 md:bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[55px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
