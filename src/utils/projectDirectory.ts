import { Projects } from "../projects/project";

const projects: Projects = {
  Thalassophobia: {
    name: "Thalassophobia",
    description:
      "A first-person multiplayer horror game that simulates being stranded in the ocean. \
      Currently under development alongside my brother using the Unity game engine.",
    languages: ["Unity", "C#"],
    date: { from: "May 2024", to: "present" },
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
      "A web-app that leverages OpenAI’s NLP API to parse user input into Overpass Turboqueries that locate and display geo-referenced objects through Open Street Maps API.",
    languages: ["ReactJS", "TypeScript", "Overpass", "Open StreetMaps"],
    date: {
      from: "Feb 2024",
      to: "Feb 2024",
    },
    link: "https://devpost.com/software/terratalk",
    linksTo: "DevPost",
  },
};
export default projects;
