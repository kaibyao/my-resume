import { useAtom } from "jotai";
import {
  skillsNotificationExpirationEffectAtom,
  skillsNotificationQueueAtom,
} from "~/features/skillsNotification/skillsNotificationStore";

interface Props {
  debug?: boolean;
}

export const SkillsNotificationQueue: React.FC<Props> = ({ debug }) => {
  const [skills] = useAtom(skillsNotificationQueueAtom);
  useAtom(skillsNotificationExpirationEffectAtom);

  return debug ? (
    <div>
      {skills.map((skill) => (
        <div key={`${skill.skillName}-${skill.endsAfter}`}>
          {skill.skillName}: {skill.endsAfter}
        </div>
      ))}
    </div>
  ) : null;
};
