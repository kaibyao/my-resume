import { useAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";
import { skillsNotificationQueueAtom } from "~/features/skillsNotification/skillsNotificationStore";
import "./SkillsNotificationToast.css";
import clsx from "clsx";

export const SkillsNotificationToast: React.FC = () => {
  const [skills] = useAtom(skillsNotificationQueueAtom);
  const skillsDeduped = useMemo(() => [...new Set(skills)], [skills]);
  const [displayedSkills, setDisplayedSkills] = useState(skillsDeduped);
  const [delayHideSkillsTimeoutId, setDelayHideSkillsTimeoutId] = useState(-1);

  useEffect(() => {
    if (skillsDeduped.join() !== displayedSkills.join()) {
      // Can be one of these occurrences:
      // skillsDeduped = 1, displayedSkills = 0 -> new skills are displayed when previously none were
      // skillsDeduped = 0, displayedSkills = 1 -> all skills were expired, but skills are still displayed
      // skillsDeduped = 1, displayedSkills = 1 -> new skills are added when previous skills were displayed

      if (skillsDeduped.length > 0 && displayedSkills.length === 0) {
        // New skills are displayed when previously none were
        setDisplayedSkills(skillsDeduped);

        if (delayHideSkillsTimeoutId > -1) {
          clearTimeout(delayHideSkillsTimeoutId);
          setDelayHideSkillsTimeoutId(-1);
        }
      } else if (skillsDeduped.length === 0 && displayedSkills.length > 0) {
        // all skills were expired, but skills are still displayed
        if (delayHideSkillsTimeoutId === -1) {
          // Extend toast for 2 more seconds than standard before disappearing
          setDelayHideSkillsTimeoutId(
            setTimeout(() => {
              setDisplayedSkills([]);
            }, 2000),
          );
        }
      } else {
        // Only show the most recent skill notifications (older ones that are still active shouldn't display)
        const lastSkillNotificationTimestamp =
          skillsDeduped[skillsDeduped.length - 1]?.endsAfter;
        setDisplayedSkills(
          skillsDeduped.filter(
            (animatingSkill) =>
              animatingSkill.endsAfter === lastSkillNotificationTimestamp,
          ),
        );
      }
    }
  }, [delayHideSkillsTimeoutId, displayedSkills, skillsDeduped]);

  // also show progress/expiration bar

  return (
    <div
      className={clsx(
        "skills-notification-toast",
        displayedSkills.length > 0
          ? "skills-notification-toast--show"
          : undefined,
      )}
    >
      {displayedSkills.length > 0 && <strong>Skills: </strong>}
      {displayedSkills.map(({ skillName }) => skillName).join(", ")}
    </div>
  );
};
