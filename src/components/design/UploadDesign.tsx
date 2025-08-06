import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Camera, X } from "lucide-react";

export const UploadDesign = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

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

  return (
    <div className="min-h-[80vh] bg-background flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-12 max-w-2xl">
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

      {/* Upload Area */}
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
  );
};