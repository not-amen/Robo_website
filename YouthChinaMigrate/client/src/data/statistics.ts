import type { UnemploymentData, Statistic } from "@shared/schema";

export const keyStatistics: Statistic[] = [
  {
    id: "youth-unemployment-2024",
    label: "Youth Unemployment (16-24)",
    value: "16.1%",
    change: "-1.0pp",
    trend: "down",
    description: "November 2024, excluding students"
  },
  {
    id: "migrant-workers",
    label: "Migrant Workers",
    value: "299.73M",
    change: "+0.7%",
    trend: "up",
    description: "Total as of 2024 (NBS)"
  },
  {
    id: "new-jobs-2024",
    label: "New Urban Jobs Created",
    value: "12.56M",
    trend: "neutral",
    description: "Target for 2024 (MOHRSS)"
  },
  {
    id: "peak-unemployment-2023",
    label: "Peak Youth Unemployment",
    value: "21.3%",
    trend: "neutral",
    description: "June 2023 (before methodology change)"
  }
];

export const allStatistics: Statistic[] = [
  ...keyStatistics,
  {
    id: "unemployment-25-29",
    label: "Unemployment (25-29)",
    value: "7.0%",
    trend: "neutral",
    description: "Latest available data"
  },
  {
    id: "overall-urban",
    label: "Overall Urban Unemployment",
    value: "5.1%",
    change: "-0.1pp",
    trend: "down",
    description: "2024 average"
  },
  {
    id: "youth-subsidy",
    label: "Youth Hire Subsidy",
    value: "¥1,500",
    description: "Per hire for ages 16-24"
  },
  {
    id: "graduates-2024",
    label: "College Graduates 2024",
    value: "11.6M",
    description: "Entering job market in 2024"
  }
];

export const unemploymentTrend: UnemploymentData[] = [
  { id: "1", period: "Jun 2023", year: 2023, month: 6, ageGroup: "16-24", rate: 21.3, notes: "Peak before data suspension (NBS)" },
  { id: "2", period: "Jan 2024", year: 2024, month: 1, ageGroup: "16-24", rate: 14.9, notes: "New methodology, excludes students (NBS)" },
  { id: "3", period: "Feb 2024", year: 2024, month: 2, ageGroup: "16-24", rate: 15.3, notes: "NBS" },
  { id: "4", period: "Mar 2024", year: 2024, month: 3, ageGroup: "16-24", rate: 15.6, notes: "NBS" },
  { id: "5", period: "Apr 2024", year: 2024, month: 4, ageGroup: "16-24", rate: 14.7, notes: "NBS" },
  { id: "6", period: "May 2024", year: 2024, month: 5, ageGroup: "16-24", rate: 14.2, notes: "NBS" },
  { id: "7", period: "Jun 2024", year: 2024, month: 6, ageGroup: "16-24", rate: 13.2, notes: "NBS" },
  { id: "8", period: "Jul 2024", year: 2024, month: 7, ageGroup: "16-24", rate: 17.1, notes: "Graduation season spike (NBS)" },
  { id: "9", period: "Aug 2024", year: 2024, month: 8, ageGroup: "16-24", rate: 18.8, notes: "Peak under new methodology (NBS)" },
  { id: "10", period: "Sep 2024", year: 2024, month: 9, ageGroup: "16-24", rate: 17.6, notes: "NBS" },
  { id: "11", period: "Oct 2024", year: 2024, month: 10, ageGroup: "16-24", rate: 17.1, notes: "NBS" },
  { id: "12", period: "Nov 2024", year: 2024, month: 11, ageGroup: "16-24", rate: 16.1, notes: "Latest available (NBS)" }
];

export const demographicBreakdown: UnemploymentData[] = [
  { id: "d1", period: "Nov 2024", year: 2024, ageGroup: "16-24", rate: 16.1, notes: "Excludes students (NBS)" },
  { id: "d2", period: "Nov 2024", year: 2024, ageGroup: "25-29", rate: 7.0, notes: "NBS" },
  { id: "d3", period: "2024 Avg", year: 2024, ageGroup: "30-59", rate: 3.9, notes: "NBS estimate" },
  { id: "d4", period: "2024 Avg", year: 2024, ageGroup: "Overall Urban", rate: 5.1, notes: "2024 average (NBS)" }
];
