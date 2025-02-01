import Button from "../ui/button";

const Hero = () => {
  return (
    <>
      <div className="relative z-0 h-[400px] overflow-hidden tablet:h-[950px] laptop:h-[1200px]">
        <div className="items-center-center absolute right-0 top-0 z-50 flex h-full w-full flex-col items-center">
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
        </div>
        <img
          src="/hero/background.webp"
          alt=""
          className="absolute z-10 h-full w-full object-cover"
        />
        <img
          src="/hero/overlay.webp"
          alt=""
          className="pointer-events-none absolute top-0 z-40 h-full w-full"
        />

        <img
          src="/hero/jack.webp"
          alt=""
          className="absolute bottom-[20px] z-30 w-full"
        />

        <img
          src="/hero/partition.webp"
          alt=""
          className="absolute bottom-0 z-40 w-full"
        />
      </div>
    </>
  );
};

export default Hero;
