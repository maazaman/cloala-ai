import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { UploadDesign } from "@/components/design/UploadDesign";
import { DesignAnalysis } from "@/components/analysis/DesignAnalysis";
import { GeographicAnalysis } from "@/components/analysis/GeographicAnalysis";
import { AdCreativeValidation } from "@/components/analysis/AdCreativeValidation";
import { PricingAdvisor } from "@/components/analysis/PricingAdvisor";
import { DemandForecasting } from "@/components/analysis/DemandForecasting";
import { ValidationDashboard } from "@/components/dashboard/ValidationDashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [currentStep, setCurrentStep] = useState("upload");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs value={currentStep} onValueChange={setCurrentStep}>
            {/* Tab Navigation */}
            <div className="mb-8 overflow-x-auto">
              <TabsList className="grid w-full grid-cols-7 lg:w-auto lg:grid-cols-7">
                <TabsTrigger value="upload">Upload</TabsTrigger>
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
                <TabsTrigger value="geographic">Geographic</TabsTrigger>
                <TabsTrigger value="creative">Ad Creative</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="demand">Demand</TabsTrigger>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              </TabsList>
            </div>

            {/* Tab Content */}
            <div className="space-y-8">
              <TabsContent value="upload" className="m-0">
                <UploadDesign />
              </TabsContent>

              <TabsContent value="analysis" className="m-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* T-shirt Preview */}
                  <div className="flex justify-center items-center bg-neutral-50 rounded-lg p-8">
                    <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <div className="w-32 h-32 bg-neutral-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <span className="text-xs">T-Shirt Preview</span>
                        </div>
                        <p className="text-sm">Uploaded Design</p>
                      </div>
                    </div>
                  </div>
                  <DesignAnalysis />
                </div>
              </TabsContent>

              <TabsContent value="geographic" className="m-0">
                <GeographicAnalysis />
              </TabsContent>

              <TabsContent value="creative" className="m-0">
                <AdCreativeValidation />
              </TabsContent>

              <TabsContent value="pricing" className="m-0">
                <PricingAdvisor />
              </TabsContent>

              <TabsContent value="demand" className="m-0">
                <DemandForecasting />
              </TabsContent>

              <TabsContent value="dashboard" className="m-0">
                <ValidationDashboard />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Index;