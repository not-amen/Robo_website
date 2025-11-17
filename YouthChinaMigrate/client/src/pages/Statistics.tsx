import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import { SEO } from "@/components/SEO";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { unemploymentTrend, demographicBreakdown, allStatistics } from "@/data/statistics";

export default function Statistics() {
  const chartConfig = {
    rate: {
      label: "Unemployment Rate",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <div className="min-h-screen bg-background py-12 lg:py-16">
      <SEO 
        title="Employment Statistics"
        description="Detailed unemployment data and trends for China's youth (ages 16-24) through November 2024, with interactive charts and demographic analysis from the National Bureau of Statistics."
        ogTitle="China Youth Unemployment Statistics - NBS Official Data"
        ogDescription="Monthly unemployment trends, demographic breakdowns, and verified statistics showing youth unemployment at 16.1% as of November 2024."
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4" data-testid="text-page-title">
            Employment Statistics
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Detailed unemployment data, trends, and demographic analysis from official Chinese government sources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {allStatistics.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Youth Unemployment Trend (2023-2024)</CardTitle>
              <CardDescription>
                Monthly unemployment rate for ages 16-24, excluding current university students. Data through November 2024.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={unemploymentTrend} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="period" 
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <YAxis 
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      label={{ value: 'Rate (%)', angle: -90, position: 'insideLeft' }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="rate" 
                      stroke="hsl(var(--chart-1))" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--chart-1))' }}
                      name="Unemployment Rate (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
              <p className="text-xs text-muted-foreground mt-4">
                Source: National Bureau of Statistics of China (NBS). Methodology changed in January 2024 to exclude current university students.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Unemployment by Age Group (Latest Data)</CardTitle>
              <CardDescription>
                Comparative unemployment rates across different age demographics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={demographicBreakdown} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="ageGroup" 
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <YAxis 
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      label={{ value: 'Rate (%)', angle: -90, position: 'insideLeft' }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar 
                      dataKey="rate" 
                      fill="hsl(var(--chart-2))"
                      name="Unemployment Rate (%)"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <p className="text-xs text-muted-foreground mt-4">
                Source: National Bureau of Statistics of China (NBS), latest available data.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="font-heading text-xl">Understanding the Data</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Methodology Change (2024)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                China suspended youth unemployment reporting in mid-2023 after the rate hit a record 21.3% in June 2023. 
                In January 2024, reporting resumed with a new methodology that excludes current university students, 
                resulting in lower reported rates. The current methodology focuses on youth actively in the labor market.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Key Challenges</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The youth unemployment crisis stems from several structural issues: a significant skills mismatch between 
                college graduates seeking white-collar jobs and available positions, economic headwinds from the real estate 
                slump and trade tensions, and over 12 million new graduates entering the job market annually.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Data Sources</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All statistics are sourced from official Chinese government publications including the National Bureau of 
                Statistics (NBS), supplemented by international organizations such as the World Bank and International 
                Labour Organization (ILO) for comparative analysis.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
