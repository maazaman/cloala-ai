import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Infinity } from "lucide-react";
export const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Infinity className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">FashionAI</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#dashboard" className="text-neutral-600 hover:text-foreground transition-colors">
            Dashboard
          </a>
          <a href="#analytics" className="text-neutral-600 hover:text-foreground transition-colors">
            Analytics
          </a>
          <a href="#pricing" className="text-neutral-600 hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#account" className="text-neutral-600 hover:text-foreground transition-colors">
            Account
          </a>
        </nav>

        {/* Theme Toggle & CTA */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button>Test Now</Button>
        </div>
      </div>
    </header>;
};