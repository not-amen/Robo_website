import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, BookOpen, Database, TrendingUp } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function About() {
  return (
    <div className="min-h-screen bg-background py-12 lg:py-16">
      <SEO 
        title="About"
        description="Learn about our methodology, data sources, and approach to analyzing China's youth unemployment crisis. All statistics verified through official NBS publications through November 2024."
        ogTitle="About - China Youth Unemployment Analysis Methodology"
        ogDescription="Comprehensive information about our data sources, research methodology, and commitment to verified statistics from the National Bureau of Statistics of China."
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4" data-testid="text-page-title">
            About This Project
          </h1>
          <p className="text-lg text-muted-foreground">
            Understanding China's youth unemployment crisis and migration policies through data-driven analysis
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl">Project Overview</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This website provides comprehensive information and analysis of China's youth unemployment crisis 
                and related migration policies. It serves as a centralized resource for understanding one of the 
                most significant economic challenges facing China today.
              </p>
              <p>
                The youth unemployment situation has garnered international attention, particularly after rates 
                exceeded 21% in mid-2023, prompting a temporary suspension of official reporting. The resumption 
                of data publication in 2024 with revised methodology reflects ongoing policy adjustments and 
                government response to this critical issue.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl">Data Sources</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Primary Sources</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>National Bureau of Statistics of China (NBS)</strong> - Official unemployment 
                    statistics, labor force surveys, and economic indicators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Ministry of Human Resources and Social Security (MOHRSS)</strong> - Employment 
                    policies, subsidy programs, and vocational training initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>State Council of China</strong> - Policy announcements, guidelines, and 
                    governmental directives</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">International Organizations</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>World Bank</strong> - Modeled ILO estimates and comparative analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>International Labour Organization (ILO)</strong> - Labor market indicators 
                    and international standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>OECD</strong> - Migration outlook and policy analysis</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl">Methodology Changes</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-md">
                <h3 className="font-semibold mb-2">June 2023 - Data Suspension</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  China suspended publication of youth unemployment statistics after the rate reached a record 
                  21.3% in June 2023. This decision sparked international debate about data transparency and 
                  the actual severity of the employment crisis.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-md">
                <h3 className="font-semibold mb-2">January 2024 - New Methodology</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Reporting resumed with a revised methodology that excludes current university students from 
                  the calculation. This change focuses measurements on youth actively participating in the labor 
                  market rather than including students who may not be seeking employment. The new methodology 
                  resulted in reported rates of 14-17% versus the previous 21%+ figures.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-md">
                <h3 className="font-semibold mb-2">Ongoing Considerations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Many analysts believe actual unemployment rates remain higher than official statistics suggest, 
                  particularly when accounting for underemployment and the growing number of college graduates 
                  working in positions significantly below their qualifications (such as food delivery or service 
                  sector jobs).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl">Structural Challenges</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Skills Mismatch</h3>
                  <p className="text-sm">
                    A fundamental disconnect exists between the aspirations of college-educated youth seeking 
                    white-collar professional positions and the actual composition of available jobs in China's 
                    economy. Over 12 million graduates enter the market annually, but job creation has not kept 
                    pace with this educated workforce expansion.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Economic Headwinds</h3>
                  <p className="text-sm">
                    The real estate sector downturn, ongoing trade tensions, and technological disruption 
                    (particularly AI and automation) have reduced traditional employment opportunities. Many 
                    industries that previously absorbed large numbers of young workers have contracted or 
                    automated their operations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Social Implications</h3>
                  <p className="text-sm">
                    High youth unemployment has led to delayed marriages, reduced consumer spending among young 
                    adults, and increased reliance on family support systems. These trends have broader implications 
                    for China's demographic challenges and long-term economic growth potential.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Disclaimer:</strong> This website presents publicly available data and analysis for 
                educational purposes. All statistics are sourced from official governmental and international 
                organizations as cited. Policy interpretations and analysis reflect consensus views from 
                international economic research institutions and think tanks. This project is not affiliated 
                with any government entity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
