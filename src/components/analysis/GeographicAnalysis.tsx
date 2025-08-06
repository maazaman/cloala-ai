import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const GeographicAnalysis = () => {
  const marketCompatibility = [
    { city: "New York", percentage: 85 },
    { city: "Tokyo", percentage: 92 },
    { city: "Dubai", percentage: 73 },
    { city: "London", percentage: 78 },
    { city: "Delhi", percentage: 68 },
    { city: "Los Angeles", percentage: 88 },
  ];

  const regionalInsights = {
    highPotential: ["Tokyo", "Los Angeles", "New York"],
    moderate: ["London", "Dubai"],
    needsAdjustment: ["Delhi"],
  };

  return (
    <div className="min-h-[80vh] bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader>
          <CardTitle>Geographic Market Analysis</CardTitle>
          <p className="text-muted-foreground">
            Regional compatibility and market potential
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
        {/* Market Compatibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-4">Market Compatibility</h3>
            <div className="space-y-3">
              {marketCompatibility.slice(0, 3).map((market, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{market.city}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-brand-teal">
                      {market.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">&nbsp;</h3>
            <div className="space-y-3">
              {marketCompatibility.slice(3).map((market, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{market.city}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-brand-teal">
                      {market.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regional Insights */}
        <div>
          <h3 className="font-semibold mb-4">Regional Insights</h3>
          <div className="space-y-4">
            <div>
              <Badge variant="default" className="mb-2 bg-brand-success text-white">
                High Potential Markets
              </Badge>
              <div className="flex flex-wrap gap-2">
                {regionalInsights.highPotential.map((city, index) => (
                  <span key={index} className="text-sm text-muted-foreground">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <Badge variant="secondary" className="mb-2 bg-brand-warning text-white">
                Moderate Markets
              </Badge>
              <div className="flex flex-wrap gap-2">
                {regionalInsights.moderate.map((city, index) => (
                  <span key={index} className="text-sm text-muted-foreground">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <Badge variant="destructive" className="mb-2">
                Needs Adjustment
              </Badge>
              <div className="flex flex-wrap gap-2">
                {regionalInsights.needsAdjustment.map((city, index) => (
                  <span key={index} className="text-sm text-muted-foreground">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
};