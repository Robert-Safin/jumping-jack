const Nav = () => {
  return (
    <nav className="bg-theme-brown-2 absolute top-0 z-50 flex w-full items-center justify-between">
      <img
        src="/hero/Title.png"
        alt=""
        className="laptop:w-[100px] laptop:h-[50px] h-[15px] w-[30px]"
      />
      <p className="text-white">lang</p>
    </nav>
  );
};

export default Nav;
