import { z } from "zod";

export const unemploymentDataSchema = z.object({
  id: z.string(),
  period: z.string(),
  year: z.number(),
  month: z.number().optional(),
  ageGroup: z.string(),
  rate: z.number(),
  notes: z.string().optional(),
});

export const policySchema = z.object({
  id: z.string(),
  title: z.string(),
  date: z.string(),
  category: z.enum(["subsidy", "reform", "employment", "urbanization", "training"]),
  description: z.string(),
  impact: z.string().optional(),
  details: z.array(z.string()).optional(),
});

export const timelineEventSchema = z.object({
  id: z.string(),
  date: z.string(),
  year: z.number(),
  month: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.enum(["policy", "data", "event"]),
});

export const statisticSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string(),
  change: z.string().optional(),
  trend: z.enum(["up", "down", "neutral"]).optional(),
  description: z.string().optional(),
});

export type UnemploymentData = z.infer<typeof unemploymentDataSchema>;
export type Policy = z.infer<typeof policySchema>;
export type TimelineEvent = z.infer<typeof timelineEventSchema>;
export type Statistic = z.infer<typeof statisticSchema>;
