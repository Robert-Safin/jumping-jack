//const appId = 3205090;

import Button from "../ui/button";

const Gallery = () => {
  return (
    <div className="relative z-0">
      <img src="/hero/partition.webp" alt="" className="w-full rotate-180" />
      <img
        src="/hero/gallery-bg.webp"
        alt=""
        className="absolute top-0 -z-10 h-full w-full object-cover"
      />
      <div className="z-20 mx-auto max-w-[1440px] px-[24px]">
        <h3 className="my-[24px] text-center font-coustard text-[16px] font-black leading-[16px] tracking-[0.2px] text-theme-yellow tablet:text-[44px] tablet:leading-[48px]">
          The difficulty curve is a vertical line.
        </h3>

        <div className="mx-auto grid grid-cols-2 gap-x-[12px] gap-y-[6px] laptop:max-w-[942px] laptop:gap-x-[24px] laptop:gap-y-[12px]">
          <div className="h-[142px] w-full bg-theme-yellow laptop:h-[443px]" />
          <div className="h-[142px] w-full bg-theme-yellow laptop:h-[443px]" />
          <div className="h-[142px] w-full bg-theme-yellow laptop:h-[443px]" />
          <div className="h-[142px] w-full bg-theme-yellow laptop:h-[443px]" />
        </div>
        <div className="mt-[40px] flex justify-center">
          <Button text="PLAY FOR FREE" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
