import About from "./About";
import Contact from "./Contact";
import Projects from "./projects/Projects";

const Content = () => (
  <main className="pt-24 lg:w-1/2 lg:py-24">
    <About />
    <Projects />
    <Contact />
  </main>
);
export default Content;
