import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const PricingAdvisor = () => {
  const [targetPrice, setTargetPrice] = useState("29");
  const [category, setCategory] = useState("T-Shirt");

  const competitorData = [
    { brand: "Brand A", price: 25, color: "bg-brand-teal" },
    { brand: "Brand B", price: 32, color: "bg-orange-400" },
    { brand: "Brand C", price: 28, color: "bg-red-500" },
    { brand: "Brand D", price: 35, color: "bg-neutral-400" },
  ];

  const recommendedPrice = 29;
  const marketRange = "$22 - $38";

  return (
    <div className="min-h-[80vh] bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader>
          <CardTitle>Pricing Advisor</CardTitle>
          <p className="text-muted-foreground">
            Optimal pricing strategy based on market analysis
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">
              Product Category
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="T-Shirt">T-Shirt</SelectItem>
                <SelectItem value="Hoodie">Hoodie</SelectItem>
                <SelectItem value="Sweatshirt">Sweatshirt</SelectItem>
                <SelectItem value="Tank Top">Tank Top</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-2">
              Target Price ($)
            </label>
            <Input
              id="price"
              value={targetPrice}
              onChange={(e) => setTargetPrice(e.target.value)}
              placeholder="29"
            />
          </div>
        </div>

        {/* Recommended Price */}
        <div className="text-center p-6 bg-neutral-50 rounded-lg">
          <div className="text-3xl font-bold text-brand-teal mb-2">
            ${recommendedPrice}
          </div>
          <div className="text-sm font-medium mb-1">Recommended Price</div>
          <div className="text-sm text-muted-foreground">
            Market Range: {marketRange}
          </div>
        </div>

        {/* Competitor Comparison Chart */}
        <div>
          <h3 className="font-semibold mb-4">Competitor Comparison</h3>
          <div className="relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground py-2">
              <span>$35</span>
              <span>$30</span>
              <span>$25</span>
              <span>$20</span>
              <span>$15</span>
              <span>$10</span>
              <span>$5</span>
              <span>$0</span>
            </div>
            
            {/* Chart area */}
            <div className="ml-8 pl-4 grid grid-cols-4 gap-4 h-48">
              {competitorData.map((competitor, index) => (
                <div key={index} className="flex flex-col justify-end items-center">
                  <div
                    className={`w-full ${competitor.color} rounded-t`}
                    style={{ height: `${(competitor.price / 35) * 100}%` }}
                  />
                  <div className="text-xs text-center mt-2 font-medium">
                    {competitor.brand}
                  </div>
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