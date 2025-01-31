import { FC } from "react";

type Props = {
  text: string;
};

const Button: FC<Props> = (props) => {
  return (
    <button className="bg-theme-black laptop:h-[84px] laptop:w-[495px] group flex h-[39px] w-[230px] rounded-[46px]">
      <div className="bg-theme-yellow border-theme-black laptop:w-[495px] laptop:h-[84px] relative -top-[7px] flex h-[39px] w-[230px] items-center justify-center space-x-3 rounded-[46px] border-4 transition-all last:-top-[14px] group-hover:-top-0">
        <img
          src="/hero/Steam.svg"
          alt=""
          className="laptop:w-[53px] laptop:h-[53px]"
        />
        <p className="font-geist laptop:text-[28px] laptop:tracking-[0.6px] laptop:leading-[28px] text-[13px] font-extrabold tracking-[0.28px]">
          {props.text}
        </p>
      </div>
    </button>
  );
};

export default Button;
