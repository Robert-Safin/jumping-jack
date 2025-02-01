import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useLocalization from "@/lib/useLocalization";
import { useState, useEffect } from "react";

const Nav = () => {
  const { lan, setLan } = useLocalization();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 19);
    deadline.setHours(deadline.getHours() + 19);
    deadline.setMinutes(0);
    deadline.setSeconds(0);

    const updateCountdown = () => {
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="absolute top-0 z-50 flex h-[56px] w-full items-center justify-between bg-theme-brown-2 px-[12px] py-[16px] tablet:h-[75px]">
      <img
        src="/hero/title.webp"
        alt="jumping jack logo"
        className="h-[30px] w-[60px] laptop:h-[50px] laptop:w-[100px]"
      />
      <p className="text-theme-blue w-[246px] text-center font-geist text-[13px] font-black leading-[18px] laptop:w-full laptop:text-[32px]">
        {lan == "eng"
          ? "JUMP CHALLENGE ENDS IN"
          : "O DESAFIO DE SALTO TERMINA EM"}
        : {""}
        {timeLeft.days} {lan == "eng" ? "days" : "dias"}{" "}
        {String(timeLeft.hours).padStart(2, "0")}:
        {String(timeLeft.minutes).padStart(2, "0")}:
        {String(timeLeft.seconds).padStart(2, "0")}
      </p>
      <Select onValueChange={setLan} value={lan}>
        <SelectTrigger className="w-[128px]">
          <SelectValue defaultValue={"eng"} />
        </SelectTrigger>
        <SelectContent className="bg-theme-brown-2">
          <SelectGroup>
            <SelectItem value="eng">English</SelectItem>
            <SelectItem value="por">Português</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </nav>
  );
};

export default Nav;
