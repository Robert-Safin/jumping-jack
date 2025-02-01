const Competition = () => {
  return (
    <div className="bg-theme-brown-1">
      <div className="mx-auto flex max-w-[1440px] flex-col space-y-10 px-[24px] laptop:space-y-20">
        <article className="text-center">
          <h3 className="font-coustard text-[14px] font-black leading-[20px] tracking-[0.6px] text-theme-yellow laptop:text-[48px] laptop:leading-[60px] laptop:tracking-[1.8px]">
            No Entry Cost
          </h3>
          <p className="font-geist text-[12px] leading-[20px] text-theme-yellow laptop:text-[36px] laptop:leading-[60px]">
            Compete for free to win $100.
          </p>
        </article>
        <article className="text-center">
          <h3 className="font-coustard text-[14px] font-black leading-[20px] tracking-[0.6px] text-theme-yellow laptop:text-[48px] laptop:leading-[60px] laptop:tracking-[1.8px]">
            Free to Download & Play
          </h3>
          <p className="font-geist text-[12px] leading-[20px] text-theme-yellow laptop:text-[36px] laptop:leading-[60px]">
            No hidden fees.
          </p>
        </article>
        <article className="text-center">
          <h3 className="font-coustard text-[14px] font-black leading-[20px] tracking-[0.6px] text-theme-yellow laptop:text-[48px] laptop:leading-[60px] laptop:tracking-[1.8px]">
            How to Compete
          </h3>
          <p className="font-geist text-[12px] leading-[20px] text-theme-yellow laptop:text-[36px] laptop:leading-[60px]">
            Jump high and see where you rank!
          </p>
        </article>
      </div>
    </div>
  );
};

export default Competition;
