import "./Skills.css";

interface Props {
  skillNames: string[];
  title: string;
}

export const Skills: React.FC<Props> = ({ skillNames, title }) => (
  <>
    <h4 className="skills-title">{title}</h4>
    <ul className="skills-list">
      {skillNames.map((skillName) => (
        <li>{skillName}</li>
      ))}
    </ul>
  </>
);
