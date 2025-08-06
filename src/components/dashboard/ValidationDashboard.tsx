import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Download, Save, RotateCcw } from "lucide-react";

export const ValidationDashboard = () => {
  const overallScore = 78;
  const scoreBreakdown = [
    { category: "design", score: 82, label: "Design" },
    { category: "market", score: 75, label: "Market" },
    { category: "pricing", score: 79, label: "Pricing" },
    { category: "timing", score: 76, label: "Timing" },
  ];

  const keyInsights = [
    "Strong design appeal in Asian markets",
    "Optimal pricing within competitive range",
    "Spring launch timing ideal for demand",
    "Consider Tokyo and LA as primary markets",
  ];

  return (
    <div className="w-full space-y-6">
      {/* Dashboard Header */}
      <div className="text-center py-8 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg">
        <h2 className="text-3xl font-bold mb-2">Validation Dashboard</h2>
        <p className="text-muted-foreground">
          Complete overview of your design's market potential
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overall Score */}
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-brand-teal mb-2">
                {overallScore}
              </div>
              <div className="text-lg font-semibold mb-1">
                Overall Validation Score
              </div>
              <Badge className="bg-brand-success text-white">
                High Confidence
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Score Breakdown */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Score Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {scoreBreakdown.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium">{item.label}</span>
                <div className="flex items-center gap-3 flex-1 ml-4">
                  <Progress value={item.score} className="flex-1" />
                  <span className="text-sm font-bold w-8">{item.score}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Key Insights */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Key Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {keyInsights.map((insight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{insight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Recommendation */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Badge className="bg-brand-success text-white mt-1">
              ✓ Proceed with Launch
            </Badge>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Recommendation</h3>
              <p className="text-muted-foreground">
                Your design shows strong market potential across multiple criteria. 
                Consider focusing on Asian markets for initial launch.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button size="lg" className="gap-2">
          <Download className="h-4 w-4" />
          Download Full Report
        </Button>
        <Button variant="outline" size="lg" className="gap-2">
          <Save className="h-4 w-4" />
          Save Project
        </Button>
        <Button variant="outline" size="lg" className="gap-2">
          <RotateCcw className="h-4 w-4" />
          New Analysis
        </Button>
      </div>
    </div>
  );
};