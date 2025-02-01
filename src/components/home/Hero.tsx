import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Button from "../ui/button";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const jackY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "5%"]));
  const titleY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
  );
  const partitionY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
  );

  const horizonY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]),
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
            alt=""
            className="mx-auto mt-[60px] h-[159px] w-[273px] tablet:mb-[100px] tablet:mt-[200px] laptop:h-[309px] laptop:w-[530px]"
          />
          <Button text="FREE DOWNLOAD FOR PC" />
          <p className="mt-[20px] text-center font-coustard text-[12px] font-black leading-[14px] tracking-[0.3px] text-theme-white-1 tablet:mt-[20px] laptop:text-[20px] laptop:leading-[22px] laptop:tracking-[0.6px]">
            Every mistake is a lesson. <br />
            You'll be very educated.
          </p>
        </motion.div>

        {/* Background */}
        <motion.img
          src="/hero/background.webp"
          alt=""
          className="absolute z-10 h-full w-full object-cover"
          style={{ y: horizonY }}
        />

        {/* Overlay */}
        <motion.img
          src="/hero/overlay.webp"
          alt=""
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
        <motion.img
          src="/hero/partition.webp"
          alt=""
          className="absolute bottom-0 z-40 w-full"
          style={{
            y: partitionY,
          }}
        />
      </div>
    </>
  );
};

export default Hero;
