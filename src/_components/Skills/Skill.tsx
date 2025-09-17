import clsx from "clsx";
import { useAtom } from "jotai";
import { useRef, useState, useEffect } from "react";
import { skillsNotificationQueueAtom } from "~/features/skillsNotification/skillsNotificationStore";

export const Skill: React.FC<{ skillName: string }> = ({ skillName }) => {
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

  // Determine if we have any perpetual skills for this skillName
  const hasPerpetualSkill = matchingActiveSkillNotifications.some(
    (skill) => skill.type === "perpetual",
  );

  if (matchingActiveSkillNotifications.length > 0) {
    // Replay the highlight animation if skill has been highlighted twice in succession.
    const lastSkillNotificationTimestamp =
      matchingActiveSkillNotifications[
        matchingActiveSkillNotifications.length - 1
      ];

    const timestampToUse =
      lastSkillNotificationTimestamp?.type === "expiring"
        ? lastSkillNotificationTimestamp.endsAfter
        : Date.now(); // Use current time for perpetual skills

    if (
      elementRef.current &&
      lastSkillNotificationTimestampState !== timestampToUse
    ) {
      for (const animation of elementRef.current.getAnimations()) {
        animation.cancel();
        animation.play();
      }
      setLastSkillNotificationTimestamp(timestampToUse);
    }
  }

  // Cancel animations when skill becomes unhighlighted
  useEffect(() => {
    if (!isSkillHighlighted && elementRef.current) {
      for (const animation of elementRef.current.getAnimations()) {
        animation.cancel();
      }
    }
  }, [isSkillHighlighted]);

  return (
    <span
      className={clsx(
        "skill-item",
        isSkillHighlighted
          ? hasPerpetualSkill
            ? "skill-highlight--perpetual"
            : "skill-highlight--expiring"
          : undefined,
      )}
      ref={elementRef}
    >
      {skillName}
    </span>
  );
};
