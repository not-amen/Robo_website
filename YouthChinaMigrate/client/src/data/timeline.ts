import type { TimelineEvent } from "@shared/schema";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t1",
    date: "June 2023",
    year: 2023,
    month: 6,
    title: "Youth Unemployment Reaches Record 21.3%",
    description: "China's youth unemployment rate (ages 16-24) hit a record high of 21.3%, sparking concerns about the economic outlook and job market conditions for young people.",
    category: "data"
  },
  {
    id: "t2",
    date: "July 2023",
    year: 2023,
    month: 7,
    title: "Data Publication Suspended",
    description: "The National Bureau of Statistics suspended publication of youth unemployment data, citing the need to review and improve the statistical methodology. This decision generated international attention and debate about transparency.",
    category: "event"
  },
  {
    id: "t3",
    date: "January 2024",
    year: 2024,
    month: 1,
    title: "New Methodology Introduced",
    description: "China resumed publishing youth unemployment statistics with a revised methodology that excludes current university students from the calculation, focusing on youth actively in the labor market. First reported rate under new methodology: 14.9%.",
    category: "data"
  },
  {
    id: "t4",
    date: "March 2024",
    year: 2024,
    month: 3,
    title: "Youth Employment Subsidy Program Launched",
    description: "Government announced ¥1,500 subsidy per youth hire (ages 16-24) for employers, requiring full insurance coverage. Program aimed at incentivizing businesses to hire young workers amid persistent unemployment challenges.",
    category: "policy"
  },
  {
    id: "t5",
    date: "July 2024",
    year: 2024,
    month: 7,
    title: "Graduation Season Spike",
    description: "Youth unemployment rose to 17.1% in July as approximately 11.6 million college graduates entered the job market, marking the annual summer spike in unemployment rates.",
    category: "data"
  },
  {
    id: "t6",
    date: "August 2024",
    year: 2024,
    month: 8,
    title: "Peak at 18.8%",
    description: "Youth unemployment reached 18.8% in August 2024, the highest level recorded under the new methodology, reflecting continued challenges in absorbing the large cohort of new graduates.",
    category: "data"
  },
  {
    id: "t7",
    date: "November 2024",
    year: 2024,
    month: 11,
    title: "Comprehensive Migrant Worker Guidelines Issued",
    description: "Ministry of Human Resources and Social Security, along with 9 other central authorities, issued comprehensive employment guidelines for China's 299.73 million migrant workers, focusing on employment stabilization, skills training, labor rights, and urban integration.",
    category: "policy"
  },
  {
    id: "t8",
    date: "November 2024",
    year: 2024,
    month: 11,
    title: "National Action Plan for Migrant Children",
    description: "Government launched landmark policy addressing education and welfare needs of migrant children, aiming to improve access to urban schools and social services regardless of hukou status.",
    category: "policy"
  },
  {
    id: "t9",
    date: "November 2024",
    year: 2024,
    month: 11,
    title: "Latest Data: 16.1%",
    description: "Most recent data shows youth unemployment at 16.1%, down from October's 17.1%, but still significantly elevated compared to other age groups and historical norms before the pandemic.",
    category: "data"
  }
].sort((a, b) => {
  if (b.year !== a.year) return b.year - a.year;
  return b.month - a.month;
});
