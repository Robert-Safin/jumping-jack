import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useLocalization from "@/lib/useLocalization";

const Nav = () => {
  const { lan, setLan } = useLocalization();

  return (
    <nav className="bg-theme-brown-2 tablet:h-[75px] absolute top-0 z-50 flex h-[56px] w-full items-center justify-between px-[12px] py-[16px]">
      <img
        src="/hero/Title.png"
        alt="jumping jack logo"
        className="laptop:w-[100px] laptop:h-[50px] h-[30px] w-[60px]"
      />
      <Select onValueChange={setLan} value={lan}>
        <SelectTrigger className="w-[180px]">
          <SelectValue defaultValue={"English"} />
        </SelectTrigger>
        <SelectContent className="bg-theme-brown-2">
          <SelectGroup>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="portuguese">Portuguese</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </nav>
  );
};

export default Nav;
