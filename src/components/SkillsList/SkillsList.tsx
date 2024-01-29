import { SkillsListItem } from "../SkillsListItem/SkillsListItem";
import "./SkillsList.css";

interface Props {
  skillNames: string[];
  title: string;
}

export const SkillsList: React.FC<Props> = ({ skillNames, title }) => {
  return (
    <>
      <h4 className="skills-title">{title}</h4>
      <ul className="skills-list">
        {skillNames.map((skillName) => (
          <SkillsListItem key={skillName}>{skillName}</SkillsListItem>
        ))}
      </ul>
    </>
  );
};
