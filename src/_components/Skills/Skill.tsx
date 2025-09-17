import clsx from "clsx";
import { useAtom } from "jotai";
import { useRef, useState } from "react";
import { skillsNotificationQueueAtom } from "~/features/skillsNotification/skillsNotificationStore";

export const SkillItem: React.FC<{ skillName: string }> = ({ skillName }) => {
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
