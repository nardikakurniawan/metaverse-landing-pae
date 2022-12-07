"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute md:flex hidden bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute md:flex hidden top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute md:flex hidden top-[42%] left-[18%] w-[200px] h-[150px] p-[6px] rounded-3xl bg-[#5d6680]">
          <img
            src="/planet-08.png"
            alt="people"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute top-0 left-0 z-20 map-gradient-01 w-full h-full"></div>

          <div className="absolute bottom-3 left-4 z-30 flex-col">
            <div className="flex">
              <img
                src="/people-03.png"
                alt="people"
                className="w-[24px] h-[24px] z-50"
              />
              <img
                src="/people-02.png"
                alt="people"
                className="w-[24px] h-[24px] z-40 -ml-3"
              />
              <img
                src="/people-01.png"
                alt="people"
                className="w-[24px] h-[24px] z-30 -ml-3"
              />
              <p className="text-white text-sm ml-2">+ 264 has joined</p>
            </div>
            <h5 className="text-white font-semibold text-lg">
              The Upside Down
            </h5>
          </div>
        </div>

        <div className="absolute md:flex hidden top-[10%] right-[18%] w-[200px] h-[150px] p-[6px] rounded-3xl bg-[#5d6680]">
          <img
            src="/planet-09.png"
            alt="people"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute top-0 left-0 z-20 map-gradient-02 w-full h-full"></div>

          <div className="absolute bottom-3 left-4 z-30 flex-col">
            <div className="flex">
              <img
                src="/people-03.png"
                alt="people"
                className="w-[24px] h-[24px] z-50"
              />
              <img
                src="/people-02.png"
                alt="people"
                className="w-[24px] h-[24px] z-40 -ml-3"
              />
              <img
                src="/people-01.png"
                alt="people"
                className="w-[24px] h-[24px] z-30 -ml-3"
              />
              <p className="text-white text-sm ml-2">+ 264 has joined</p>
            </div>
            <h5 className="text-white font-semibold text-lg">Hawking Labs</h5>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
