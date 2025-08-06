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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Validate Your Fashion Designs with AI
        </CardTitle>
        <p className="text-center text-muted-foreground">
          Help clothing brands and manufacturers test their designs across multiple
          criteria before launching. Get insights on trends, pricing, and market demand.
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-6">
          <Button variant="default" className="flex-1">
            Start Analysis
          </Button>
          <Button variant="outline" className="flex-1">
            View Demo
          </Button>
        </div>

        <div className="border-2 border-dashed border-border rounded-lg p-8">
          {uploadedImage ? (
            <div className="relative">
              <img 
                src={uploadedImage} 
                alt="Uploaded design" 
                className="max-w-full max-h-96 mx-auto rounded-lg"
              />
              <Button
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={removeImage}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                <Camera className="h-8 w-8 text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Upload Your Design</h3>
              <p className="text-muted-foreground mb-4">
                Upload your t-shirt or hoodie design to begin the AI analysis
              </p>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-neutral-300 rounded-lg p-6">
                  <Upload className="mx-auto h-12 w-12 text-neutral-400 mb-4" />
                  <p className="font-medium mb-2">Drag & Drop Your Design</p>
                  <p className="text-sm text-muted-foreground">
                    Support for JPG, PNG, SVG files up to 10MB
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Button variant="outline" className="w-full">
                    Choose File
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};