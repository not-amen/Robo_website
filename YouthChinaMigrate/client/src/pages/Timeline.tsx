import { TimelineItem } from "@/components/TimelineItem";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import { timelineEvents } from "@/data/timeline";

export default function Timeline() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: "All Events" },
    { value: "policy", label: "Policy" },
    { value: "data", label: "Data" },
    { value: "event", label: "Events" },
  ];

  const filteredEvents = selectedCategory === "all" 
    ? timelineEvents 
    : timelineEvents.filter(e => e.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-12 lg:py-16">
      <SEO 
        title="Historical Timeline"
        description="Key milestones in China's youth employment crisis from June 2023 record unemployment (21.3%) through November 2024 policy initiatives, including data suspension, methodology changes, and major reforms."
        ogTitle="China Youth Unemployment Timeline - Major Events 2023-2024"
        ogDescription="Track critical policy changes, data releases, and employment initiatives shaping China's response to the youth unemployment challenge."
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4" data-testid="text-page-title">
            Historical Timeline
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Key milestones, policy changes, and critical events in China's youth employment and migration landscape
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
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

        {filteredEvents.length > 0 ? (
          <div>
            {filteredEvents.map((event, index) => (
              <TimelineItem 
                key={event.id} 
                event={event} 
                isLast={index === filteredEvents.length - 1}
              />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">No events found in this category.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
