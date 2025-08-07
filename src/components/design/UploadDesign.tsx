import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Camera, X, CheckCircle, BarChart3, Globe, Target, Shield } from "lucide-react";

export const UploadDesign = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDescriptionVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-[100vh] bg-background">
      {/* Header */}
      <div className="text-center pt-20 pb-12 max-w-2xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm px-3 py-1 rounded-full mb-6">
          <Upload className="h-4 w-4" />
          Trusted by fashion brands
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Validate Your Designs.
          <br />
          <span className="text-muted-foreground">Local-first AI validation</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Integrate design analysis and market validation in your browser.
          <br />
          No data ever leaves.
        </p>
      </div>

      {/* Scroll-triggered Description Section */}
      <div 
        ref={descriptionRef}
        className={`max-w-6xl mx-auto px-4 mb-16 transition-all duration-1000 transform ${
          isDescriptionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Description */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Upload Your Design
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Easily upload your t-shirt or hoodie design to unlock deep AI insights before you launch.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Why upload here?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our platform uses advanced artificial intelligence to help clothing brands and manufacturers 
                validate their designs across all the factors that drive sell-through and market fit. 
                By uploading your design, you get access to:
              </p>
            </div>

            {/* How It Works */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Upload className="h-5 w-5 text-accent" />
                How It Works:
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                  <p>Click or drag-and-drop your design file here (JPG, PNG, 10MB max).</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                  <p>Our backend AI automatically processes your image—no technical setup needed!</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                  <p>Get visual feedback and actionable insights within seconds.</p>
                </div>
              </div>
            </Card>

            {/* Privacy Notice */}
            <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-green-500 mb-1">Your Privacy:</h4>
                <p className="text-sm text-muted-foreground">
                  All uploads are encrypted and confidential. Your designs are never shared—only you see the results.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="space-y-6">
            <div className="grid gap-4">
              <div className={`p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 transition-all duration-700 delay-200 ${
                isDescriptionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}>
                <div className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Automated Design Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Instantly extract color palettes, assess design style, and measure visual complexity.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 transition-all duration-700 delay-300 ${
                isDescriptionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Trend Compatibility Scores</h4>
                    <p className="text-sm text-muted-foreground">
                      Get Trend Match Scores powered by fashion-trained Vision Transformer models.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 transition-all duration-700 delay-400 ${
                isDescriptionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Geo-Trend Insights</h4>
                    <p className="text-sm text-muted-foreground">
                      See heatmaps showing where your style is most likely to succeed globally.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 transition-all duration-700 delay-500 ${
                isDescriptionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Local Fit Recommendations</h4>
                    <p className="text-sm text-muted-foreground">
                      Get Local Style Fit Scores for your target cities and markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`text-center p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 transition-all duration-700 delay-600 ${
              isDescriptionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <p className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Turn your ideas into bestsellers with data, not guesswork.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Start by uploading your design below!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Area */}
      <div className="flex flex-col items-center justify-center px-4 pb-20">
        {uploadedImage ? (
        <div className="relative w-full max-w-md">
          <img 
            src={uploadedImage} 
            alt="Uploaded design" 
            className="w-full max-h-96 object-contain mx-auto rounded-lg border border-border"
          />
          <Button
            variant="outline"
            size="sm"
            className="absolute top-2 right-2"
            onClick={removeImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="w-full max-w-2xl">
          <div className="relative border border-border rounded-lg bg-card/50 backdrop-blur-sm">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              placeholder="What would you like to validate?"
            />
            <div className="p-8 text-center">
              <div className="text-lg text-muted-foreground mb-4">
                What would you like to validate?
              </div>
              <div className="flex items-center gap-2 justify-center text-accent">
                <Upload className="h-5 w-5" />
                <span className="text-sm">Upload Design</span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            <Button variant="outline" size="sm" className="rounded-full">
              <Camera className="h-4 w-4 mr-2" />
              T-Shirt Design
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <Upload className="h-4 w-4 mr-2" />
              Hoodie Design
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Market Analysis
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Pricing Strategy
            </Button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};