import { useAtom } from "jotai";
import { enqueueSkillsToNotificationQueueAtom } from "~/features/skillsNotification/skillsNotificationStore";
import { SKILLS_NOTIFICATION_DURATION } from "~/features/skillsNotification/skillsNotificationConstants";

interface Props {
  skills: string[];
}

export const SkillsNotificationButton: React.FC<Props> = ({ skills }) => {
  const [, enqueueSkills] = useAtom(enqueueSkillsToNotificationQueueAtom);

  const handleHighlightSkills = () => {
    const expirationTimestamp = Date.now() + SKILLS_NOTIFICATION_DURATION;
    enqueueSkills([
      ...skills.map((skill) => ({
        skillName: skill,
        endsAfter: expirationTimestamp,
      })),
    ]);
  };

  return (
    <button
      className="skills-notification-button screen-only"
      onClick={handleHighlightSkills}
      onMouseEnter={handleHighlightSkills}
    >
      Skills
    </button>
  );
};
