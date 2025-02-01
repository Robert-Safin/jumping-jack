import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Trailer from "@/components/home/Trailer";

const Home = () => {
  return (
    <div className="min-h-[300vh]">
      <Hero />
      <Trailer />
      <Gallery />
    </div>
  );
};

export default Home;
