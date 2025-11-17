import type { Policy } from "@shared/schema";

export const policies: Policy[] = [
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
