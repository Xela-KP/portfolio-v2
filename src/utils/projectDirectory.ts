import { Projects } from "../projects/project";

const projects: Projects = {
  Thalassophobia: {
    name: "Thalassophobia",
    description:
      "A first-person multiplayer horror game that simulates being stranded in the ocean. \
      Currently under development.",
    languages: ["Unity", "C#"],
    date: { from: "May 2024", to: "Present" },
    link: "https://github.com/perochorichard/ocean_game",
    linksTo: "GitHub",
  },
  PerochoOS: {
    name: "Perocho OS",
    description:
      "a Web Based Windows OS side project. Inspired by Dustin Brett.\
    Currently under development",
    languages: ["ReactJS", "NextJS", "TypeScript", "Tailwind"],
    date: {
      from: "Apr 2024",
      to: "Present",
    },
    link: "https://github.com/Xela-KP/perochoos",
    linksTo: "GitHub",
  },
  // NomadPortfolios: {
  //   name: "Nomad Portfolios",
  //   description:
  //     "We build media-portfolios for individual clients, targeting University Students looking to stand out and gain a competitive edge over others.",
  //   languages: ["NextJS", "TypeScript", "MaterialUI"],
  //   date: {
  //     from: "Apr 2024",
  //     to: "Present",
  //   },
  //   link: "https://github.com/Xela-KP/nomad",
  //   linksTo: "GitHub",
  // },
  LiteCode: {
    name: "Lite Code",
    description:
      "Developed an educational app that visualizes the code-structure and execution-stack of computer programs.",
    languages: ["Java", "Swing", "JSON"],
    date: {
      from: "Feb 2024",
      to: "Apr 2024",
    },
    link: "https://www.youtube.com/watch?v=fQooBDmQUBg",
    linksTo: "YouTube",
  },
  TerraTalks: {
    name: "Terra Talks",
    description:
      "A web-app that leverages OpenAI’s NLP API to parse user input into Overpass Turboqueries, locating geo-referenced objects through Open Street Maps API.",
    languages: ["ReactJS", "TypeScript", "Overpass", "Open StreetMaps"],
    date: {
      from: "Feb 2024",
      to: "Feb 2024",
    },
    link: "https://devpost.com/software/terratalk",
    linksTo: "DevPost",
  },
  SortVisual: {
    name: "Sorting Algorithm Visualizer",
    description:
      "A web-app that visualizes simple quadratic and logarithmic \
    sorting algorithms.",
    languages: ["HTML", "CSS", "JavaScript", "Jquery"],
    date: {
      from: "Nov 2021",
      to: "Dec 2021",
    },
    link: "https://xela-kp.github.io/projects/sort_visualizer/sort_visualizer.index.html",
    linksTo: "Website",
  },
  Chess: {
    name: "Chess",
    description:
      "A Chess Web-App made with vanilla HTML, CSS, and JavaScript.\
      Created during a time where I was obsessed with Chess.",
    languages: ["HTML", "CSS", "JavaScript", "JQuery"],
    date: {
      from: "Oct 2021",
      to: "Nov 2021",
    },
    link: "https://xela-kp.github.io/projects/chess/chess.index.html",
    linksTo: "Website",
  },
};
export default projects;
