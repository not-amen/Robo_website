import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { type Statistic } from "@shared/schema";

interface StatCardProps {
  stat: Statistic;
}

export function StatCard({ stat }: StatCardProps) {
  const getTrendIcon = () => {
    if (stat.trend === "up") return <ArrowUp className="h-4 w-4 text-destructive" />;
    if (stat.trend === "down") return <ArrowDown className="h-4 w-4 text-green-600" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  const getTrendColor = () => {
    if (stat.trend === "up") return "text-destructive";
    if (stat.trend === "down") return "text-green-600";
    return "text-muted-foreground";
  };

  return (
    <Card className="hover-elevate transition-all duration-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {stat.label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-mono text-4xl font-bold" data-testid={`stat-value-${stat.id}`}>
            {stat.value}
          </span>
          {stat.change && (
            <div className={`flex items-center gap-1 text-sm font-medium ${getTrendColor()}`}>
              {getTrendIcon()}
              <span data-testid={`stat-change-${stat.id}`}>{stat.change}</span>
            </div>
          )}
        </div>
        {stat.description && (
          <p className="mt-2 text-xs text-muted-foreground" data-testid={`stat-description-${stat.id}`}>
            {stat.description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
