import { defineCollection, z } from "astro:content";

const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    organizationUrl: z.string(),
    startDate: z.date(),
    endDate: z
      .date()
      .optional()
      .describe("If omitted, assume this is your current position."),
  }),
});

export const collections = {
  experience: experienceCollection,
};
