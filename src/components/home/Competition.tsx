import useLocalization from "@/lib/useLocalization";

const Competition = () => {
  const { lan } = useLocalization();
  return (
    <div className="bg-theme-brown-1">
      <div className="mx-auto flex max-w-[1440px] flex-col space-y-10 px-[24px] laptop:space-y-20">
        <article className="text-center">
          <h3 className="font-coustard text-[14px] font-black leading-[20px] tracking-[0.6px] text-theme-yellow tablet:text-[20px] tablet:leading-[30px] laptop:text-[48px] laptop:leading-[60px] laptop:tracking-[1.8px]">
            {lan == "eng" ? "No Entry Cost" : "Sem custo de entrada"}
          </h3>
          <p className="font-geist text-[12px] leading-[20px] text-theme-yellow tablet:text-[18px] tablet:leading-[30px] laptop:text-[36px] laptop:leading-[60px]">
            {lan == "eng"
              ? "  Compete for free to win $100."
              : "Competir de graça para ganhar $100"}
          </p>
        </article>
        <article className="text-center">
          <h3 className="font-coustard text-[14px] font-black leading-[20px] tracking-[0.6px] text-theme-yellow tablet:text-[20px] tablet:leading-[30px] laptop:text-[48px] laptop:leading-[60px] laptop:tracking-[1.8px]">
            {lan == "eng"
              ? "  Free to Download & Play"
              : "Grátis para baixar e jogar"}
          </h3>
          <p className="font-geist text-[12px] leading-[20px] text-theme-yellow tablet:text-[18px] tablet:leading-[30px] laptop:text-[36px] laptop:leading-[60px]">
            {lan == "eng" ? "No hidden fees." : "Sem taxas ocultas."}
          </p>
        </article>
        <article className="text-center">
          <h3 className="font-coustard text-[14px] font-black leading-[20px] tracking-[0.6px] text-theme-yellow tablet:text-[20px] tablet:leading-[30px] laptop:text-[48px] laptop:leading-[60px] laptop:tracking-[1.8px]">
            {lan == "eng" ? "How to Compete" : "Como competir"}
          </h3>
          <p className="font-geist text-[12px] leading-[20px] text-theme-yellow tablet:text-[18px] tablet:leading-[30px] laptop:text-[36px] laptop:leading-[60px]">
            {lan == "eng"
              ? "Jump high and see where you rank!"
              : "Salte alto e veja sua classificação!"}
          </p>
        </article>
      </div>
    </div>
  );
};

export default Competition;
