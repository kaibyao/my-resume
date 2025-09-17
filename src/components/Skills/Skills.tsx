import { useAtom } from "jotai";
import { skillsNotificationQueueAtom } from "~/features/skillsNotification/skillsNotificationStore";
import { useRef, useState } from "react";
import clsx from "clsx";
import "./Skills.css";

interface SkillGroupProps {
  title: string;
  skillNames: string[];
}

const SkillItem: React.FC<{ skillName: string }> = ({ skillName }) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [
    lastSkillNotificationTimestampState,
    setLastSkillNotificationTimestamp,
  ] = useState<number>(-1);
  const [skills] = useAtom(skillsNotificationQueueAtom);

  const matchingActiveSkillNotifications = skills.filter(
    (skill) => skill.skillName === skillName,
  );
  const isSkillHighlighted = matchingActiveSkillNotifications.length > 0;

  if (matchingActiveSkillNotifications.length > 0) {
    // Replay the highlight animation if skill has been highlighted twice in succession.
    const lastSkillNotificationTimestamp =
      matchingActiveSkillNotifications[
        matchingActiveSkillNotifications.length - 1
      ];
    if (
      lastSkillNotificationTimestamp?.endsAfter &&
      elementRef.current &&
      lastSkillNotificationTimestampState !==
        lastSkillNotificationTimestamp.endsAfter
    ) {
      for (const animation of elementRef.current.getAnimations()) {
        animation.cancel();
        animation.play();
      }
      setLastSkillNotificationTimestamp(
        lastSkillNotificationTimestamp.endsAfter,
      );
    }
  }

  return (
    <span
      className={clsx(
        "skill-item",
        isSkillHighlighted ? "skill-highlight" : undefined,
      )}
      ref={elementRef}
    >
      {skillName}
    </span>
  );
};

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skillNames }) => {
  return (
    <span className="skill-group">
      <strong>{title}:</strong>{" "}
      {skillNames.map((skillName, index) => (
        <span key={skillName}>
          <SkillItem skillName={skillName} />
          {index < skillNames.length - 1 && ", "}
        </span>
      ))}
      .
    </span>
  );
};

export const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: "AI",
      skillNames: ["Claude Code", "Cursor AI", "OpenAI"],
    },
    {
      title: "Front-end",
      skillNames: ["TypeScript", "React", "Next.js"],
    },
    {
      title: "Back-end",
      skillNames: [
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "Java + Hibernate",
        "MySQL",
      ],
    },
    {
      title: "Server/Client",
      skillNames: ["WebSockets", "GraphQL (Apollo)", "Service Workers", "REST"],
    },
    {
      title: "Testing",
      skillNames: [
        "Jest",
        "testing-library",
        "vitest",
        "Playwright",
        "JUnit",
        "Selenium",
      ],
    },
    {
      title: "Infrastructure",
      skillNames: [
        "Terraform",
        "Docker",
        "Github Actions / CI+CD",
        "Amazon AWS",
        "Datadog",
        "Kubernetes",
        "Helm",
        "Ansible",
        "Prometheus",
        "Google Cloud",
      ],
    },
  ];

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
