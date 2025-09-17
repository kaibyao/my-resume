import { useAtom } from "jotai";
import {
  enqueueSkillsToNotificationQueueAtom,
  startSkillsExpirationAtom,
} from "~/features/skillsNotification/skillsNotificationStore";
import { SKILLS_NOTIFICATION_DURATION } from "~/features/skillsNotification/skillsNotificationConstants";

interface Props {
  skills: string[];
}

export const SkillsNotificationButton: React.FC<Props> = ({ skills }) => {
  const [, enqueueSkills] = useAtom(enqueueSkillsToNotificationQueueAtom);
  const [, startExpiration] = useAtom(startSkillsExpirationAtom);

  const handleHighlightSkills = () => {
    enqueueSkills(
      skills.map((skill) => ({
        type: "perpetual" as const,
        skillName: skill,
      })),
    );
  };

  const handleStartExpiration = () => {
    const expirationTimestamp = Date.now() + SKILLS_NOTIFICATION_DURATION;
    startExpiration(expirationTimestamp);
  };

  return (
    <button
      className="skills-notification-button screen-only"
      onClick={handleHighlightSkills}
      onMouseEnter={handleHighlightSkills}
      onMouseLeave={handleStartExpiration}
    >
      Skills
    </button>
  );
};
