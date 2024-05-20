import LinkArrow from "components/icons/LinkArrow";

const About = () => (
  <section
    id="about"
    className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Work experience"
  >
    <p className="my-4">
      I was introduced to programming at the age of 15 by my brother. I became
      hooked after building my first program: A command-line tic-tac-toe in
      Python.
    </p>
    <p className="my-4">
      I am currently a third year student at &nbsp;
      <span className="inline-block text-purple-500">Western University</span>,
      seeking internship opportunities and building my portfolio through
      side-projects.
    </p>

    <p>
      Check out &nbsp;
      <a
        href="https://xela-kp.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block max-w-fit opacity-50 hover:!opacity-100 transition-all"
      >
        <span className="text-sky">
          my old website
          <span className="inline-block">
            <LinkArrow />
          </span>
        </span>
      </a>
    </p>
  </section>
);
export default About;
