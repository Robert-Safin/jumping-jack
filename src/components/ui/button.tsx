import { addToBuffer, BufferArgs } from "@/lib/addToBuffer";
import { FC, MouseEvent } from "react";
import { BsSteam } from "react-icons/bs";

type Props = {
  text: string;
};

const Button: FC<Props> = (props) => {
  const handleClick = async (e: MouseEvent) => {
    const data: BufferArgs = {
      eventType: "click",
      customParams: {
        click_x: e.clientX,
        click_y: e.clientY,
      },
    };
    await addToBuffer(data);
    window.location.href =
      "https://store.steampowered.com/app/3205090/Jumping_Jack/";
  };
  return (
    <button
      className="group flex h-[41px] w-fit rounded-[46px] bg-theme-black laptop:h-[84px]"
      onClick={(e) => handleClick(e)}
    >
      <div className="relative -top-[5px] flex h-[41px] w-fit items-center justify-center space-x-3 rounded-[46px] border-[4px] border-theme-black bg-theme-yellow px-2 transition-all group-hover:-top-0 laptop:-top-[14px] laptop:h-[84px] laptop:px-4">
        <BsSteam className="h-[25px] w-[25px] laptop:h-[53px] laptop:w-[53px]" />

        <p className="font-geist text-[13px] font-extrabold tracking-[0.28px] laptop:text-[28px] laptop:leading-[28px] laptop:tracking-[0.6px]">
          {props.text}
        </p>
      </div>
    </button>
  );
};

export default Button;
