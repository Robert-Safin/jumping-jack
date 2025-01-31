const Home = () => {
  return (
    <div>
      <div className="tablet:h-[750px] laptop:h-[1300px] relative z-0 h-[400px] border-4 border-red-500">
        <img
          src="/hero/background.png"
          alt=""
          className="absolute z-10 h-full w-full object-cover"
        />
        <img
          src="/hero/Overlay.png"
          alt=""
          className="absolute top-0 z-50 h-full w-full"
        />

        <img
          src="/hero/Rocks Left.png"
          alt=""
          className="laptop:w-6/12 tablet:bottom-20 absolute bottom-10 left-0 z-30 w-1/2 object-cover"
        />
        <img
          src="/hero/Rocks Right.png"
          alt=""
          className="laptop:w-5/12 tablet:bottom-20 absolute bottom-10 right-0 z-30 w-1/2 object-cover"
        />

        <img
          src="/hero/partition.png"
          alt=""
          className="absolute bottom-0 z-50 w-full"
        />
      </div>
    </div>
  );
};

export default Home;
