import { FaDiscord } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import useLocalization from "@/lib/useLocalization";

const Footer = () => {
  const { lan } = useLocalization();

  return (
    <div>
      <div className="mx-auto mt-[40px] max-w-[1440px] tablet:mt-[100px] tablet:px-12 laptop:mt-[200px]">
        <div className="flex flex-col items-center py-[24px] tablet:items-start">
          <img
            src="/hero/room.svg"
            alt=""
            className="h-[69px] w-[105px] object-cover laptop:h-[131px] laptop:w-[200px]"
          />

          <div className="flex w-full flex-col items-center tablet:flex-row-reverse tablet:items-center tablet:justify-between">
            <div className="my-[40px] flex space-x-4">
              <div className="cursor-pointer rounded-full bg-white bg-opacity-[12%] p-[14px] hover:animate-pulse">
                <FaDiscord className="text-3xl text-white" />
              </div>
              <div className="cursor-pointer rounded-full bg-white bg-opacity-[12%] p-[14px] hover:animate-pulse">
                <RiInstagramFill className="text-3xl text-white" />
              </div>

              <div className="cursor-pointer rounded-full bg-white bg-opacity-[12%] p-[14px] hover:animate-pulse">
                <IoLogoYoutube className="text-3xl text-white" />
              </div>
              <div className="cursor-pointer rounded-full bg-white bg-opacity-[12%] p-[14px] hover:animate-pulse">
                <FaFacebook className="text-3xl text-white" />
              </div>
            </div>

            <div className="text-center font-geist text-[11px] leading-[24px] tracking-[0.2px] text-white laptop:text-left laptop:text-[14px]">
              <p>
                ©2025 Room Games,
                {lan === "eng"
                  ? " All Rights Reserved"
                  : " Todos os direitos reservados"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
