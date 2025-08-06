import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = React.useState<"light" | "dark">("light")

  React.useEffect(() => {
    const root = window.document.documentElement
    const isDark = theme === "dark"
    
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    
    // Store preference
    localStorage.setItem("theme", theme)
  }, [theme])

  React.useEffect(() => {
    // Load saved theme or detect system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    setTheme(savedTheme || systemTheme)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        "glass relative h-10 w-10 rounded-full transition-all duration-300",
        "hover:scale-110 dark:glass-glow",
        className
      )}
    >
      <Sun className={cn(
        "h-5 w-5 transition-all duration-300",
        theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100"
      )} />
      <Moon className={cn(
        "absolute h-5 w-5 transition-all duration-300",
        theme === "light" ? "scale-0 opacity-0" : "scale-100 opacity-100"
      )} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}