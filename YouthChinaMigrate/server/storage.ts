import type { UnemploymentData, Policy, TimelineEvent, Statistic } from "@shared/schema";

export interface IStorage {
  getKeyStatistics(): Promise<Statistic[]>;
  getAllStatistics(): Promise<Statistic[]>;
  getUnemploymentTrend(): Promise<UnemploymentData[]>;
  getDemographicBreakdown(): Promise<UnemploymentData[]>;
  getAllPolicies(): Promise<Policy[]>;
  getRecentPolicies(limit: number): Promise<Policy[]>;
  getAllTimelineEvents(): Promise<TimelineEvent[]>;
}

export class MemStorage implements IStorage {
  private keyStats: Statistic[];
  private allStats: Statistic[];
  private unemploymentTrend: UnemploymentData[];
  private demographicData: UnemploymentData[];
  private policies: Policy[];
  private timelineEvents: TimelineEvent[];

  constructor() {
    this.keyStats = [
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

    this.allStats = [
      ...this.keyStats,
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

    this.unemploymentTrend = [
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

    this.demographicData = [
      { id: "d1", period: "Nov 2024", year: 2024, ageGroup: "16-24", rate: 16.1, notes: "Excludes students (NBS)" },
      { id: "d2", period: "Nov 2024", year: 2024, ageGroup: "25-29", rate: 7.0, notes: "NBS" },
      { id: "d3", period: "2024 Avg", year: 2024, ageGroup: "30-59", rate: 3.9, notes: "NBS estimate" },
      { id: "d4", period: "2024 Avg", year: 2024, ageGroup: "Overall Urban", rate: 5.1, notes: "2024 average (NBS)" }
    ];

    this.policies = [
      {
        id: "nov-2024-guidelines",
        title: "Comprehensive Employment Guidelines for Migrant Workers",
        date: "November 22, 2024",
        category: "employment",
        description: "China issued comprehensive employment guidelines through the Ministry of Human Resources and Social Security along with 9 other central authorities, focusing on high-quality employment, urbanization facilitation, and social integration for the nation's 299.73 million migrant workers.",
        impact: "This represents the most comprehensive policy framework to date for addressing migrant worker employment and integration, with potential to benefit hundreds of millions of workers and their families.",
        details: [
          "Stabilize employment channels and expand job opportunities for migrant workers",
          "Enhance working skills through comprehensive training programs",
          "Safeguard labor rights and improve mechanisms to prevent wage arrears",
          "Promote participation in social insurance (pension, medical, unemployment, work-injury)",
          "Provide equal access to basic public services in urban areas",
          "Relax restrictions on urban household registration (hukou) to facilitate settlement"
        ]
      },
      {
        id: "youth-subsidy-2024",
        title: "Youth Employment Subsidy Program",
        date: "2024 (Extension announced)",
        category: "subsidy",
        description: "Employers receive a one-time subsidy of ¥1,500 ($209) per youth hire for workers aged 16-24, with requirements for full insurance coverage for at least 3 months. The program extension was announced in 2024 to cover recent graduates and those unemployed within 2 years of graduation.",
        impact: "Incentivizes businesses to hire young workers during a period of record youth unemployment, helping to absorb millions of graduates entering the job market.",
        details: [
          "¥1,500 one-time payment per eligible youth worker hired",
          "Covers workers aged 16-24 years old",
          "Requires full social insurance coverage for minimum 3 months",
          "Program extension announced in 2024",
          "Applies to unemployed youth within 2 years of graduation"
        ]
      },
      {
        id: "hukou-reform-2024",
        title: "Hukou System Relaxation for Urban Settlement",
        date: "2024",
        category: "urbanization",
        description: "Gradual relaxation of the household registration (hukou) system to encourage willing migrant workers to settle in cities. This addresses one of the primary barriers to full urban integration for China's massive migrant workforce.",
        impact: "Potentially enables millions of migrant workers to access urban services including education, healthcare, and social benefits that were previously restricted to urban hukou holders.",
        details: [
          "Relaxed restrictions on urban household registration",
          "Encourages permanent settlement in cities for migrant workers",
          "Protects land rights of migrant workers who choose to urbanize",
          "Gradual implementation starting with smaller cities",
          "Major metropolitan areas (Beijing, Shanghai) maintaining stricter controls"
        ]
      },
      {
        id: "vocational-training-expansion",
        title: "Vocational Training Access Expansion",
        date: "2024",
        category: "training",
        description: "Expanded access to technical schools and vocational training programs for unemployed youth and migrant workers. Age restrictions for enrollment have been relaxed to accommodate older workers seeking skill upgrades.",
        impact: "Addresses the critical skills mismatch in China's labor market by providing pathways for workers to gain in-demand technical skills in manufacturing, technology, and service sectors.",
        details: [
          "Expanded enrollment in technical schools and vocational programs",
          "Relaxed age restrictions to accommodate diverse learners",
          "Focus on high-demand sectors: intelligent manufacturing, domestic services, technology",
          "Programs specifically targeting unemployed youth and migrant workers",
          "Government subsidies for training programs in priority sectors"
        ]
      },
      {
        id: "social-insurance-push",
        title: "Social Insurance Participation Enhancement",
        date: "2024",
        category: "reform",
        description: "Comprehensive push to increase migrant worker participation in pension, medical care, unemployment, and work-injury insurance programs. Addresses the historical gap in social safety net coverage for migrant populations.",
        impact: "Provides crucial safety net protections to vulnerable workers, potentially covering millions who previously lacked access to unemployment benefits, healthcare, and retirement security.",
        details: [
          "Promotion of pension insurance enrollment for migrant workers",
          "Medical insurance coverage expansion to mobile populations",
          "Unemployment insurance access for non-permanent urban residents",
          "Work-injury insurance standardization across employment types",
          "Simplified enrollment processes for migrant populations"
        ]
      },
      {
        id: "migrant-children-action-plan",
        title: "National Action Plan for Migrant Children",
        date: "2024",
        category: "urbanization",
        description: "Landmark policy addressing the education and welfare needs of children of migrant workers, who have historically faced barriers to accessing quality education and social services in urban areas where their parents work.",
        impact: "Improves educational outcomes and social integration for millions of children affected by internal migration, addressing one of the most vulnerable populations in China's development.",
        details: [
          "Equal access to urban education for migrant children",
          "Welfare support systems for migrant families",
          "Protection of children's rights regardless of hukou status",
          "Integration support in urban school systems",
          "Addressing long-term impacts of family separation due to migration"
        ]
      }
    ];

    this.timelineEvents = [
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
    ];
  }

  async getKeyStatistics(): Promise<Statistic[]> {
    return this.keyStats;
  }

  async getAllStatistics(): Promise<Statistic[]> {
    return this.allStats;
  }

  async getUnemploymentTrend(): Promise<UnemploymentData[]> {
    return this.unemploymentTrend;
  }

  async getDemographicBreakdown(): Promise<UnemploymentData[]> {
    return this.demographicData;
  }

  async getAllPolicies(): Promise<Policy[]> {
    return this.policies;
  }

  async getRecentPolicies(limit: number = 3): Promise<Policy[]> {
    return this.policies.slice(0, limit);
  }

  async getAllTimelineEvents(): Promise<TimelineEvent[]> {
    return this.timelineEvents.sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return b.month - a.month;
    });
  }
}

export const storage = new MemStorage();
