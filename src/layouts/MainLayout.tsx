import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
