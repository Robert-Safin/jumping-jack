import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Button from "../ui/button";
import useLocalization from "@/lib/useLocalization";

const Hero = () => {
  const ref = useRef(null);
  const { lan } = useLocalization();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 70, damping: 10 }; // Less intense animation

  const jackY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "60%"]),
    springConfig,
  );
  const titleY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
    springConfig,
  );
  const horizonY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "20%"]),
    springConfig,
  );

  return (
    <>
      <div
        ref={ref}
        className="relative z-0 h-[400px] overflow-hidden tablet:h-[720px] laptop:h-[1200px]"
      >
        <motion.div
          style={{ y: titleY }}
          className="items-center-center absolute right-0 top-0 z-50 flex h-full w-full flex-col items-center"
        >
          <img
            src="/hero/title.webp"
            alt="Title"
            loading="lazy"
            className="mx-auto mt-[60px] h-[159px] w-[273px] tablet:mb-[100px] tablet:mt-[200px] laptop:h-[309px] laptop:w-[530px]"
          />
          <Button
            text={lan == "eng" ? "PLAY & WIN NOW!" : "JOGUE E GANHE AGORA!"}
          />
          <p className="text-theme-blue mt-[20px] font-coustard font-black leading-[26px] tracking-[0.25px] laptop:mt-[40px] laptop:text-[48px]">
            {lan == "eng" ? "JUMP HIGH, EARN $100" : "SALTE ALTO, GANHE $ 100"}
          </p>
        </motion.div>

        {/* Background */}
        <motion.img
          src="/hero/background.webp"
          alt="background"
          loading="lazy"
          className="absolute z-10 h-full w-full object-cover"
          style={{ y: horizonY }}
        />

        {/* Overlay */}
        <motion.img
          src="/hero/overlay.webp"
          alt="shadow overlay"
          loading="lazy"
          className="pointer-events-none absolute top-0 z-40 h-full w-full"
          style={{ y: horizonY }}
        />

        {/* Parallax Effect on Jack Image */}
        <motion.img
          src="/hero/jack.webp"
          alt=""
          className="absolute bottom-[20px] z-30 w-full"
          style={{ y: jackY }}
        />

        {/* Partition */}
        <img
          src="/hero/partition.webp"
          alt="front rocks"
          loading="lazy"
          className="absolute bottom-0 z-40 w-full"
        />
      </div>
    </>
  );
};

export default Hero;
