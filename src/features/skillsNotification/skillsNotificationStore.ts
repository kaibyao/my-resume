import { atom } from "jotai";
import { atomEffect } from "jotai-effect";

interface PerpetualSkill {
  type: 'perpetual';
  skillName: string;
}

interface ExpiringSkill {
  type: 'expiring';
  /** Unix timestamp of skill animation expiring. */
  endsAfter: number;
  skillName: string;
}

type SkillNotification = PerpetualSkill | ExpiringSkill;

export const skillsNotificationQueueAtom = atom<SkillNotification[]>([]);

export const enqueueSkillsToNotificationQueueAtom = atom(
  null,
  (_get, set, newSkills: SkillNotification[]) => {
    set(skillsNotificationQueueAtom, newSkills);
  },
);

export const startSkillsExpirationAtom = atom(
  null,
  (get, set, expirationTimestamp: number) => {
    const currentSkills = get(skillsNotificationQueueAtom);
    const updatedSkills = currentSkills.map((skill): SkillNotification => {
      if (skill.type === 'perpetual') {
        return {
          type: 'expiring',
          skillName: skill.skillName,
          endsAfter: expirationTimestamp,
        };
      }
      return skill;
    });
    set(skillsNotificationQueueAtom, updatedSkills);
  },
);

export const skillsNotificationExpirationEffectAtom = atomEffect((get, set) => {
  const intervalId = setInterval(() => {
    const now = Date.now();
    const skills = get(skillsNotificationQueueAtom);

    const activeSkillsNotifications = skills.filter((skillNotification) => {
      if (skillNotification.type === 'perpetual') {
        return true; // Always keep perpetual skills
      } else {
        // Now TypeScript knows this is ExpiringSkill
        return skillNotification.endsAfter > now;
      }
    });

    if (skills.length !== activeSkillsNotifications.length) {
      set(skillsNotificationQueueAtom, activeSkillsNotifications);
    }
  }, 200);

  return () => clearInterval(intervalId);
});
