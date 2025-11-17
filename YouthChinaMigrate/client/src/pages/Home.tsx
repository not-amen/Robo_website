import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Briefcase } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import heroImage from "@assets/generated_images/Chinese_cityscape_youth_professionals_6e6b2721.png";
import { keyStatistics } from "@/data/statistics";
import { policies } from "@/data/policies";

export default function Home() {
  const recentPolicies = policies.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Home"
        description="Comprehensive analysis of China's youth unemployment crisis through November 2024, featuring current statistics, policy analysis, and migration data from official NBS sources."
        ogTitle="China Youth Unemployment Analysis - Data & Policy Insights"
        ogDescription="Explore verified 2023-2024 data on youth unemployment rates, government policies, and migrant worker initiatives shaping China's labor market."
      />
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-end pb-16 lg:pb-20">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-title">
            China's Youth Unemployment Crisis
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mb-8 leading-relaxed" data-testid="text-hero-description">
            Comprehensive analysis of youth employment challenges and migration policies shaping China's economic landscape through November 2024
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/statistics">
              <Button size="lg" className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30" data-testid="button-view-statistics">
                View Statistics
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/policies">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20" data-testid="button-explore-policies">
                Explore Policies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold mb-4" data-testid="text-key-stats-heading">
              Key Statistics
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Current snapshot of youth unemployment and labor market dynamics in China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyStatistics.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold mb-4" data-testid="text-recent-policies-heading">
              Recent Policy Updates
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Latest government initiatives addressing youth employment and migration challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {recentPolicies.map((policy) => (
              <Card key={policy.id} className="hover-elevate transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-xl" data-testid={`text-recent-policy-${policy.id}`}>
                    {policy.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{policy.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed line-clamp-3">
                    {policy.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/policies">
              <Button variant="outline" size="lg" data-testid="button-view-all-policies">
                View All Policies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-elevate transition-all duration-200">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Comprehensive Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access detailed unemployment statistics, trends, and demographic breakdowns from official sources
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate transition-all duration-200">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Policy Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore government initiatives, employment programs, and migration reforms with expert insights
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate transition-all duration-200">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Historical Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track major milestones, policy changes, and critical events shaping China's labor market
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
