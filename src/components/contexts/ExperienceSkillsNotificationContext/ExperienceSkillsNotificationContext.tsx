import { createContext, useState } from "react";

interface ExperienceSkillsNotification {
  skills: string[];
  notifySkills(skills: string[]): void;
}

export const ExperienceSkillsNotificationContext =
  createContext<ExperienceSkillsNotification>({
    skills: [],
    notifySkills: () => {},
  });

export const ExperienceSkillsNotificationProvider: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [skills, setSkills] = useState<string[]>([]);

  return (
    <ExperienceSkillsNotificationContext.Provider
      value={{ skills, notifySkills: setSkills }}
    >
      {children}
    </ExperienceSkillsNotificationContext.Provider>
  );
};
