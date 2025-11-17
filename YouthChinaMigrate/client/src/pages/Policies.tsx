import { PolicyCard } from "@/components/PolicyCard";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import { policies } from "@/data/policies";

export default function Policies() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: "All Policies" },
    { value: "subsidy", label: "Subsidies" },
    { value: "reform", label: "Reforms" },
    { value: "employment", label: "Employment" },
    { value: "urbanization", label: "Urbanization" },
    { value: "training", label: "Training" },
  ];

  const filteredPolicies = selectedCategory === "all" 
    ? policies 
    : policies.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-12 lg:py-16">
      <SEO 
        title="Policy Analysis"
        description="Government initiatives addressing China's youth unemployment crisis, including the November 2024 comprehensive migrant worker guidelines, employment subsidies, hukou reforms, and vocational training programs."
        ogTitle="China Youth Employment Policies - Government Initiatives 2024"
        ogDescription="Explore subsidies, training programs, urbanization reforms, and social insurance enhancements targeting 299.73 million migrant workers and unemployed youth."
      />
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4" data-testid="text-page-title">
            Policy Analysis
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprehensive overview of government initiatives addressing youth unemployment and migration challenges
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="font-heading text-xl font-semibold mb-4">Policy Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In response to rising youth unemployment, the Chinese government has implemented a multi-faceted approach 
              combining direct subsidies, labor market reforms, vocational training expansion, and urbanization initiatives. 
              The November 2024 guidelines represent the most comprehensive policy package announced to date, focusing on high-quality 
              employment and social integration for migrant workers. All policies listed reflect verified announcements through 2024.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-muted/50 rounded-md">
                <h3 className="font-semibold mb-2">Key Policy Focus Areas</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Employment subsidies for youth hires</li>
                  <li>• Hukou (household registration) reform</li>
                  <li>• Vocational training expansion</li>
                  <li>• Social insurance participation</li>
                  <li>• Urban integration support</li>
                </ul>
              </div>
              <div className="p-4 bg-muted/50 rounded-md">
                <h3 className="font-semibold mb-2">Target Demographics</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Youth aged 16-24 (unemployed)</li>
                  <li>• Recent college graduates</li>
                  <li>• Migrant workers (299.73 million)</li>
                  <li>• Rural-to-urban migrants</li>
                  <li>• Vocational training seekers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            {categories.map((cat) => (
              <TabsTrigger 
                key={cat.value} 
                value={cat.value}
                data-testid={`tab-category-${cat.value}`}
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {filteredPolicies.length > 0 ? (
          <div className="space-y-6">
            {filteredPolicies.map((policy) => (
              <PolicyCard key={policy.id} policy={policy} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">No policies found in this category.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
