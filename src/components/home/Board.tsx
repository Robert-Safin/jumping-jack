import { Trophy } from "lucide-react";
import Button from "../ui/button";
import Footer from "../Footer";
import useLocalization from "@/lib/useLocalization";
import { Link } from "react-router-dom";
import { handleClickBuffer } from "@/lib/addToBuffer";

const Board = () => {
  const { lan } = useLocalization();

  return (
    <div className="relative z-0">
      <img src="/hero/partition.webp" alt="" className="w-full rotate-180" />
      <img
        src="/hero/gallery-bg.webp"
        alt="background"
        className="absolute top-0 -z-10 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="z-20 mx-auto flex max-w-[1440px] justify-center px-3 pt-[40px] tablet:px-12">
        <div className="flex flex-col-reverse laptop:flex-row laptop:space-x-4">
          <div className="flex flex-col-reverse space-y-6 laptop:flex-col">
            <div
              className="border-theme-blue mt-6 overflow-hidden rounded-[19px] border-[1px] laptop:mt-0 laptop:h-[440px] laptop:w-[772px]"
              onClick={(e) => handleClickBuffer(e, false)}
            >
              <video
                muted
                controls
                autoPlay
                className="h-full w-full object-cover"
              >
                <source src="/vid/video.mp4" type="video/mp4" />
                <source src="/vid/video.webm" type="video/webm" />
                {lan === "eng"
                  ? "Your browser does not support the video tag."
                  : "Seu navegador não suporta a tag de vídeo."}
              </video>
            </div>

            <div className="border-theme-blue flex flex-col space-y-4 rounded-[19px] border-[1px] bg-black px-3 py-6 laptop:px-6 laptop:py-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 laptop:space-x-4">
                  <div className="bg-theme-blue h-2 w-2 rounded-full laptop:h-3 laptop:w-3" />
                  <h4 className="font-geist text-[18px] font-medium leading-[22px] tracking-[0.2px] text-white laptop:text-[38px] laptop:leading-[36px] laptop:tracking-[0.6px]">
                    {lan === "eng" ? "LIVE ACTIVITY" : "AO VIVO"}
                  </h4>
                </div>
                <p className="text-theme-blue bg-theme-blue border-theme-blue rounded-[7.2px] border-[1px] bg-opacity-[16%] p-2 font-geist font-[12px] leading-[12px] laptop:text-[20px] laptop:leading-[20px]">
                  4 {lan === "eng" ? "Players" : "Jogadoras"}
                </p>
              </div>
              <div className="flex items-center space-x-4 laptop:space-x-8">
                <div className="h-[38px] w-[38px] rounded-full bg-slate-300 laptop:h-[50px] laptop:w-[50px]" />
                <div>
                  <p className="font-geist text-[18px] font-black leading-[20px] tracking-[0.36px] text-white laptop:text-[32px] laptop:leading-[38px]">
                    Kralion
                  </p>
                  <p className="text-theme-blue font-geist text-[12px] font-medium leading-[12px] laptop:text-[17px] laptop:leading-[20px]">
                    4 {lan === "eng" ? "minutes ago" : "minutos atrás"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-theme-blue rounded-[19px] border-[1px] bg-black py-6 laptop:w-[540px]">
            <div className="flex items-center justify-between px-3 pb-[24px] laptop:px-6">
              <div className="flex items-center space-x-2 laptop:space-x-4">
                <div className="bg-theme-blue h-2 w-2 rounded-full laptop:h-3 laptop:w-3" />
                <h4 className="font-geist text-[22px] font-black leading-[22px] tracking-[0.2px] text-white laptop:text-[38px] laptop:leading-[36px]">
                  {lan === "eng" ? "LEADERBOARD" : "RANKING"}
                </h4>
              </div>
              <div className="text-theme-blue bg-theme-blue border-theme-blue flex items-center space-x-2 rounded-[7.2px] border-[1px] bg-opacity-[16%] p-2 font-geist font-[12px] leading-[12px] laptop:text-[20px] laptop:leading-[20px]">
                <Trophy className="h-[13px] w-[13px] laptop:h-[18px] laptop:w-[18px]" />{" "}
                <p>Top 5</p>
              </div>
            </div>
            <div className="flex flex-col">
              {[
                ["Kralion", 593],
                ["HADES", 497],
                ["ITSK33N", 380],
                ["HELUb", 229],
                ["Keelp", 124],
              ].map((p, i) => (
                <div
                  className={`flex w-full items-center justify-between px-3 py-3 laptop:px-6 laptop:py-6 ${i % 2 != 0 ? "bg-opacity-100" : "bg-white bg-opacity-[8%]"} `}
                  key={i}
                >
                  <div className="flex items-center">
                    <div className="flex items-center space-x-3">
                      <div className="h-[38px] w-[38px] rounded-full bg-slate-300 laptop:h-[50px] laptop:w-[50px]" />
                      <p className="font-geist text-[18px] font-black leading-[20px] tracking-[0.36px] text-white laptop:text-[32px] laptop:leading-[36px]">
                        {p[0]}
                      </p>
                    </div>
                  </div>
                  <p className="text-theme-blue font-geist text-[12px] font-medium leading-[12px] laptop:text-[24px] laptop:leading-[20px]">
                    {p[1]} m
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[40px] mt-[40px] flex justify-center tablet:mb-[40px] tablet:mt-[60px] laptop:mb-[60px] laptop:mt-[60px]">
        <div onClick={(e) => handleClickBuffer(e, true)}>
          <Button
            text={lan == "eng" ? "JUMP IN & WIN BIG!" : "ENTRE E GANHE MUITO!"}
          />
        </div>
      </div>
      <p className="mx-auto max-w-[300px] text-center font-geist text-[11px] font-semibold leading-[11px] text-theme-yellow tablet:max-w-full">
        {lan == "eng"
          ? "18+ only. By playing, you agree to our "
          : "Somente maiores de 18 anos. Ao jogar, você concorda com nossos "}
        <span className="underline">
          <Link to={"/terms-and-conditions"}>
            {lan == "eng" ? "Terms & Conditions" : "Termos e Condições"}
          </Link>
        </span>
      </p>
      <Footer />
    </div>
  );
};

export default Board;
