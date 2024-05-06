export type Project = {
  name: string;
  description: string;
  languages: string[];
  date: { from: string; to: string };
  link: string;
  linksTo: string;
};

export type Projects = { [name: string]: Project };
