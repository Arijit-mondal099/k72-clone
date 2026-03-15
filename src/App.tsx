import { Route, Routes } from "react-router-dom";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import Stair from "./components/common/Stair";
import Navbar from "./components/common/Navbar";
import FullScreenNav from "./components/common/FullScreenNav";
import { useAppContext } from "./context/app-context";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const { isNavbarOpen } = useAppContext();

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      {isNavbarOpen && <FullScreenNav />}

      <Stair>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/agence" element={<Agence />} />
        </Routes>
      </Stair>
    </main>
  );
};

export default App;
