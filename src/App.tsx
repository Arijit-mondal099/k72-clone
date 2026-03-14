import { Route, Routes } from "react-router-dom";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import Stair from "./components/common/Stair";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="overflow-x-hidden">
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
