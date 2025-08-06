import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const DesignAnalysis = () => {
  const colorPalette = [
    { name: "Coral", hex: "#FF6B6B", code: "#FF6B6B" },
    { name: "Mint", hex: "#4ECDC4", code: "#4ECDC4" },
    { name: "Blue", hex: "#45B7D1", code: "#45B7D1" },
    { name: "Orange", hex: "#FFA07A", code: "#FFA07A" },
    { name: "Green", hex: "#98D8C8", code: "#98D8C8" },
  ];

  const styleClassification = [
    { style: "graphic", percentage: 75 },
    { style: "textHeavy", percentage: 45 },
    { style: "minimalist", percentage: 60 },
    { style: "vintage", percentage: 30 },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Design Analysis</CardTitle>
        <p className="text-muted-foreground">
          Analyzing your marketing content effectiveness
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Color Palette */}
        <div>
          <h3 className="font-semibold mb-4">Color Palette</h3>
          <div className="flex gap-2 flex-wrap">
            {colorPalette.map((color, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-12 h-12 rounded-lg mb-2 border border-neutral-200"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="text-xs text-muted-foreground">{color.code}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Style Classification */}
        <div>
          <h3 className="font-semibold mb-4">Style Classification</h3>
          <div className="space-y-3">
            {styleClassification.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm capitalize">{item.style}</span>
                <div className="flex items-center gap-3 flex-1 ml-4">
                  <Progress value={item.percentage} className="flex-1" />
                  <span className="text-sm font-medium">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trend & Originality */}
        <div>
          <h3 className="font-semibold mb-4">Trend & Originality</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-2">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-neutral-200"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${82 * 2.51} ${100 * 2.51}`}
                    className="text-brand-teal"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold">82%</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Trend Match</p>
            </div>
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-2">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-neutral-200"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${78 * 2.51} ${100 * 2.51}`}
                    className="text-brand-teal"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold">78%</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Originality</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};