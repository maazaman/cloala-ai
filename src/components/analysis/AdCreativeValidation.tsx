import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const AdCreativeValidation = () => {
  const [caption, setCaption] = useState(
    "🔥 NEW ARRIVAL 🔥 Limited edition streetwear that defines your style. Shop now and get 20% off! #StreetStyle #Fashion"
  );

  const scores = {
    tone: 72,
    clarity: 85,
    engagement: 79,
    ctaStrength: 68,
  };

  const improvements = [
    "Add urgency language to CTA",
    "Simplify headline message",
    "Include lifestyle imagery",
  ];

  return (
    <div className="min-h-[80vh] bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader>
          <CardTitle>Ad Creative Validation</CardTitle>
          <p className="text-muted-foreground">
            Analyze your marketing content effectiveness
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
        {/* Ad Caption Input */}
        <div>
          <label htmlFor="caption" className="block text-sm font-medium mb-2">
            Ad Caption
          </label>
          <Textarea
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="min-h-[100px]"
            placeholder="Enter your ad caption here..."
          />
        </div>

        <Button className="w-full">Analyze Content</Button>

        {/* Scores Grid */}
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center p-4 bg-neutral-50 rounded-lg">
            <div className="text-2xl font-bold text-brand-teal mb-1">
              {scores.tone}%
            </div>
            <div className="text-sm text-muted-foreground">Tone Score</div>
          </div>
          <div className="text-center p-4 bg-neutral-50 rounded-lg">
            <div className="text-2xl font-bold text-brand-teal mb-1">
              {scores.clarity}%
            </div>
            <div className="text-sm text-muted-foreground">Clarity</div>
          </div>
          <div className="text-center p-4 bg-neutral-50 rounded-lg">
            <div className="text-2xl font-bold text-brand-teal mb-1">
              {scores.engagement}%
            </div>
            <div className="text-sm text-muted-foreground">Engagement</div>
          </div>
          <div className="text-center p-4 bg-neutral-50 rounded-lg">
            <div className="text-2xl font-bold text-brand-teal mb-1">
              {scores.ctaStrength}%
            </div>
            <div className="text-sm text-muted-foreground">CTA Strength</div>
          </div>
        </div>

        {/* Improvement Suggestions */}
        <div>
          <h3 className="font-semibold mb-3">Improvement Suggestions</h3>
          <div className="space-y-2">
            {improvements.map((suggestion, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-neutral-50 rounded">
                <div className="w-2 h-2 bg-brand-teal rounded-full flex-shrink-0" />
                <span className="text-sm">{suggestion}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
};