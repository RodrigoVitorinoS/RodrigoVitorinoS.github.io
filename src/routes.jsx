import { BrowserRouter } from "react-router";
import Menu from "./components/Menu/index.jsx";
import About from "./pages/About";
import Projects from "./pages/Projects/index.jsx";
import Skills from "./pages/Skills/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import Banner from "./components/Banner/index.jsx";


function AppRoutes() {
  return (
    
    <BrowserRouter>
      <Menu/>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </BrowserRouter>
  );
}

export default AppRoutes;
