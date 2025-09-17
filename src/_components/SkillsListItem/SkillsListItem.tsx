import { useAtom } from "jotai";
import { skillsNotificationQueueAtom } from "~/features/skillsNotification/skillsNotificationStore";
import { useRef, useState } from "react";
import clsx from "clsx";

import "./SkillsListItem.css";

interface Props {
  /** In this component, `children` is the skill name.  */
  children: string;
}

export const SkillsListItem: React.FC<Props> = ({ children: skillName }) => {
  const elementRef = useRef<HTMLLIElement>(null);
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
    <li
      className={clsx(
        "skill",
        isSkillHighlighted ? "skill-highlight" : undefined,
      )}
      ref={elementRef}
    >
      {skillName}
    </li>
  );
};
