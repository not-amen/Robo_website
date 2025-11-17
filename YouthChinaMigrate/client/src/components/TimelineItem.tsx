import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type TimelineEvent } from "@shared/schema";

interface TimelineItemProps {
  event: TimelineEvent;
  isLast?: boolean;
}

export function TimelineItem({ event, isLast }: TimelineItemProps) {
  const categoryColors: Record<string, string> = {
    policy: "bg-blue-500",
    data: "bg-purple-500",
    event: "bg-green-500",
  };

  return (
    <div className="relative pl-8 pb-8" data-testid={`timeline-item-${event.id}`}>
      <div className={`absolute left-0 top-0 w-px bg-border ${!isLast ? "h-full" : "h-4"}`} />
      
      <div className={`absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full ${categoryColors[event.category]}`} />
      
      <div className="space-y-2">
        <div className="flex items-center gap-3 flex-wrap">
          <time className="font-mono text-sm font-medium text-muted-foreground" data-testid={`text-event-date-${event.id}`}>
            {event.date}
          </time>
          <Badge variant="outline" data-testid={`badge-event-category-${event.id}`}>
            {event.category}
          </Badge>
        </div>
        
        <Card className="hover-elevate transition-all duration-200">
          <CardContent className="p-4">
            <h3 className="font-heading text-lg font-semibold mb-2" data-testid={`text-event-title-${event.id}`}>
              {event.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground mb-2" data-testid={`text-event-description-${event.id}`}>
              {event.description}
            </p>
            {event.category === "data" && (
              <p className="text-xs text-muted-foreground italic">Source: National Bureau of Statistics (NBS)</p>
            )}
            {event.category === "policy" && (
              <p className="text-xs text-muted-foreground italic">Source: Ministry of Human Resources and Social Security (MOHRSS)</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
