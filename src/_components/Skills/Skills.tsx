import { useCallback } from "react";
import "./Skills.css";
import { useRequestAnimationFrame } from "~/_hooks/useRequestAnimationFrame";
import { skillGroups } from "~/_components/Skills/skill-groups";
import { Skill } from "~/_components/Skills/Skill";

export const Skills: React.FC = () => {
  const updateStickyClasses = useCallback(() => {
    const stickyHeader = document.querySelector(".sticky-header");
    if (stickyHeader) {
      if (window.scrollY > 0) {
        stickyHeader.classList.add("scrolled");
      } else {
        stickyHeader.classList.remove("scrolled");
      }
    }
  }, []);
  useRequestAnimationFrame(updateStickyClasses);

  return (
    <section className="skills">
      <h2>Skills</h2>
      <p className="skills-content">
        {skillGroups.map((group) => (
          <SkillGroup
            key={group.title}
            title={group.title}
            skillNames={group.skillNames}
          />
        ))}
      </p>
    </section>
  );
};

interface SkillGroupProps {
  title: string;
  skillNames: string[];
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skillNames }) => {
  return (
    <span className="skill-group">
      <strong>{title}:</strong>{" "}
      {skillNames.map((skillName, index) => (
        <span key={skillName}>
          <Skill skillName={skillName} />
          {index < skillNames.length - 1 && ", "}
        </span>
      ))}
      .
    </span>
  );
};
