import Button from "../ui/button";

const Hero = () => {
  return (
    <>
      <div className="tablet:h-[950px] laptop:h-[1200px] relative z-0 h-[400px] overflow-hidden">
        <div className="items-center-center absolute right-0 top-0 z-50 flex h-full w-full flex-col items-center">
          <img
            src="/hero/Title.png"
            alt=""
            className="tablet:mt-[200px] laptop:w-[530px] laptop:h-[309px] tablet:mb-[100px] mx-auto mt-[60px] h-[159px] w-[273px]"
          />
          <Button text="FREE DOWNLOAD FOR PC" />
          <p className="tablet:mt-[20px] font-coustard text-theme-white-1 laptop:text-[20px] laptop:tracking-[0.6px] laptop:leading-[22px] mt-[20px] text-center text-[12px] font-black leading-[14px] tracking-[0.3px]">
            Every mistake is a lesson. <br />
            You'll be very educated.
          </p>
        </div>
        <img
          src="/hero/background.png"
          alt=""
          className="absolute z-10 h-full w-full object-cover"
        />
        <img
          src="/hero/Overlay.png"
          alt=""
          className="pointer-events-none absolute top-0 z-40 h-full w-full"
        />

        <img
          src="/hero/jack.png"
          alt=""
          className="absolute bottom-[20px] z-30 w-full"
        />

        <img
          src="/hero/partition.png"
          alt=""
          className="absolute bottom-0 z-40 w-full"
        />
      </div>
    </>
  );
};

export default Hero;
