const TechStack = ({ languages }: { languages: string[] }) => (
  <ul>
    {languages.map((language) => (
      <Language key={language} language={language} />
    ))}
  </ul>
);

const Language = ({ language }: { language: string }) => (
  <li className="mt-1 flex">
    <p className="text-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium text-sky">
      {language}
    </p>
  </li>
);
export default TechStack;
