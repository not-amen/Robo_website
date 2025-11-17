import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText } from "lucide-react";
import { type Policy } from "@shared/schema";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface PolicyCardProps {
  policy: Policy;
}

export function PolicyCard({ policy }: PolicyCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const categoryColors: Record<string, string> = {
    subsidy: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    reform: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    employment: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    urbanization: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    training: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  };

  return (
    <Card className="hover-elevate transition-all duration-200">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <Badge className={categoryColors[policy.category]} data-testid={`badge-category-${policy.id}`}>
                {policy.category}
              </Badge>
            </div>
            <CardTitle className="text-xl" data-testid={`text-policy-title-${policy.id}`}>
              {policy.title}
            </CardTitle>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
          <Calendar className="h-4 w-4" />
          <span data-testid={`text-policy-date-${policy.id}`}>{policy.date}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-base leading-relaxed" data-testid={`text-policy-description-${policy.id}`}>
          {policy.description}
        </p>
        
        {policy.impact && (
          <div className="mt-4 p-4 bg-muted/50 rounded-md">
            <p className="text-sm font-medium mb-1">Impact:</p>
            <p className="text-sm text-muted-foreground" data-testid={`text-policy-impact-${policy.id}`}>
              {policy.impact}
            </p>
          </div>
        )}

        {policy.details && policy.details.length > 0 && (
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-4">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between" data-testid={`button-expand-${policy.id}`}>
                <span className="text-sm font-medium">View Details</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <ul className="space-y-2 pl-4">
                {policy.details.map((detail, index) => (
                  <li key={index} className="text-sm text-muted-foreground list-disc">
                    {detail}
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        )}
      </CardContent>
    </Card>
  );
}
