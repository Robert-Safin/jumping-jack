import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="min-w-[375px] overflow-x-auto">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
