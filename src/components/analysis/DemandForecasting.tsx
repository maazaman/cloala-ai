import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

export const DemandForecasting = () => {
  const demandData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 72 },
    { month: "Mar", value: 78 },
    { month: "Apr", value: 85 },
    { month: "May", value: 82 },
    { month: "Jun", value: 78 },
  ];

  const socialTrends = [
    { tag: "#streetwear", growth: "+15%" },
    { tag: "#sustainable", growth: "+28%" },
    { tag: "#minimalist", growth: "+12%" },
  ];

  const maxValue = Math.max(...demandData.map(d => d.value));

  return (
    <div className="min-h-[80vh] bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader>
          <CardTitle>Demand Forecasting</CardTitle>
          <p className="text-muted-foreground">
            Predict market demand and optimal launch timing
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
        {/* Demand Chart */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">6-Month Demand Forecast</h3>
            <div className="text-right">
              <div className="text-lg font-bold text-brand-teal">March - April</div>
              <div className="text-sm text-muted-foreground">
                Peak demand period with favorable market conditions
              </div>
            </div>
          </div>
          
          <div className="relative h-32 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg p-4">
            {/* Chart line */}
            <svg className="absolute inset-4 w-full h-full">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-brand-teal"
                points={demandData.map((point, index) => 
                  `${(index / (demandData.length - 1)) * 100}%,${100 - (point.value / maxValue) * 80}%`
                ).join(' ')}
              />
            </svg>
            
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-4 right-4 flex justify-between text-xs text-muted-foreground">
              {demandData.map((point, index) => (
                <span key={index}>{point.month}</span>
              ))}
            </div>
            
            {/* Y-axis labels */}
            <div className="absolute left-0 top-4 bottom-4 flex flex-col justify-between text-xs text-muted-foreground">
              <span>100</span>
              <span>90</span>
              <span>80</span>
              <span>70</span>
              <span>60</span>
              <span>50</span>
              <span>40</span>
              <span>30</span>
              <span>20</span>
              <span>10</span>
              <span>0</span>
            </div>
          </div>
        </div>

        {/* Optimal Launch Timing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Optimal Launch Timing</h3>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-brand-teal" />
                <span className="font-bold text-brand-teal">March - April</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Peak demand period with favorable market conditions
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Social Media Trends</h3>
            <div className="space-y-2">
              {socialTrends.map((trend, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-neutral-50 rounded">
                  <span className="text-sm font-medium">{trend.tag}</span>
                  <Badge variant="default" className="bg-brand-success text-white">
                    {trend.growth}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
};