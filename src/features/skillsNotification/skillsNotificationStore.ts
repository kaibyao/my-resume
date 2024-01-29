import { atom } from "jotai";
import { atomEffect } from "jotai-effect";

interface AnimatingSkill {
  /** Unix timestamp of skill animation expiring. */
  endsAfter: number;
  skillName: string;
}

export const skillsNotificationQueueAtom = atom<AnimatingSkill[]>([]);

export const enqueueSkillsToNotificationQueueAtom = atom(
  null,
  (get, set, newSkills: AnimatingSkill[]) => {
    const currentlyQueuedSkills = get(skillsNotificationQueueAtom);
    set(skillsNotificationQueueAtom, [...currentlyQueuedSkills, ...newSkills]);
  },
);

export const skillsNotificationExpirationEffectAtom = atomEffect((get, set) => {
  const intervalId = setInterval(() => {
    const now = Date.now();
    const skills = get(skillsNotificationQueueAtom);

    const activeSkillsNotifications = skills.filter(
      (skillNotification) => skillNotification.endsAfter > now,
    );

    if (skills.length !== activeSkillsNotifications.length) {
      set(skillsNotificationQueueAtom, activeSkillsNotifications);
    }
  }, 200);

  return () => clearInterval(intervalId);
});
