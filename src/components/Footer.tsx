import { FaDiscord } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-theme-brown-2">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center py-[24px] laptop:items-start">
          <img
            src="/public/hero/room.svg"
            alt=""
            className="h-[69px] w-[105px] object-cover laptop:h-[131px] laptop:w-[200px]"
          />

          <div className="flex w-full flex-col items-center laptop:flex-row-reverse laptop:items-center laptop:justify-between">
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
              <p>Terms of Service / Privacy Policy</p>
              <p>©2025 Room Games, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
