import BottomText from "../components/home/BottomText";
import TopText from "../components/home/TopText";
import Video from "../components/home/Video";

const Home = () => {
  return (
    <section>
      <div className="fixed inset-0">
        <Video />
      </div>

      <div className="min-h-screen w-full relative flex flex-col items-center justify-between">
        <TopText />
        <BottomText />
      </div>
    </section>
  );
};

export default Home;
