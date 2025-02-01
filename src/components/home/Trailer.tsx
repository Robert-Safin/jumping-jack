const Trailer = () => {
  return (
    <div className="bg-theme-brown-1">
      <div className="mx-auto max-w-[1440px] px-[24px]">
        <p className="text-center font-coustard text-[16px] font-black leading-[16px] tracking-[0.2px] text-theme-yellow tablet:text-[44px] tablet:leading-[48px]">
          A game about perseverance. <br />
          And maybe therapy.
        </p>
        <video
          controls
          className="mb-[20px] mt-[40px] h-[196px] w-full border tablet:h-[450px] laptop:h-[720px]"
        >
          <source src="/hero/old/jackfinal.webm" type="video/webm" />
          <source src="/hero/old/jackshort.webm" type="video/webm" />
        </video>
        <iframe
          className="mx-auto w-full px-[12px] laptop:w-[942px]"
          src="https://store.steampowered.com/widget/3205090/"
          width="100%"
          height="200px"
        />
      </div>
    </div>
  );
};

export default Trailer;
