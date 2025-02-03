import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Button from "../ui/button";
import useLocalization from "@/lib/useLocalization";
import { handleClickBuffer } from "@/lib/addToBuffer";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  const ref = useRef(null);
  const { lan } = useLocalization();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 30, damping: 5 };

  const jackY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    springConfig,
  );
  const titleY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "25%"]),
    springConfig,
  );
  const horizonY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "50%"]),
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
          className="items-center-center absolute right-0 top-0 z-50 flex h-full w-full flex-col items-center tablet:top-10 laptop:top-20"
        >
          <img
            src="/hero/title.webp"
            alt="Title"
            loading="lazy"
            className="mx-auto mt-[60px] h-[159px] w-[273px] tablet:mb-[20px] tablet:mt-[150px] tablet:h-[200px] tablet:w-auto laptop:mb-[70px] laptop:h-[309px] laptop:w-[530px]"
          />
          <div onClick={(e) => handleClickBuffer(e, true)}>
            <Button
              text={lan == "eng" ? "PLAY & WIN NOW!" : "JOGUE E GANHE AGORA!"}
            />
          </div>
          <p className="text-theme-blue mt-[20px] font-coustard font-black leading-[26px] tracking-[0.25px] laptop:mt-[60px] laptop:text-[48px]">
            {lan == "eng" ? "JUMP HIGH, EARN $100" : "SALTE ALTO, GANHE $ 100"}
          </p>
        </motion.div>

        {/* Background */}
        <motion.img
          src="/hero/background.webp"
          srcSet="/hero/background-small.webp 600w, /hero/background.webp 1200w"
          sizes="(max-width: 768px) 600px, 1200px"
          alt="background"
          className="absolute z-10 h-full w-full object-cover"
          style={{ y: loaded ? horizonY : "0%" }}
          fetchPriority="high"
          onLoad={() => setLoaded(true)}
        />

        {/* Overlay */}

        <motion.div
          className="gradient absolute z-40 h-full w-full object-cover"
          style={{ y: horizonY }}
        />

        {/* Parallax Effect on Jack Image */}
        <motion.img
          src="/hero/jack.webp"
          alt="jumping jack"
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
