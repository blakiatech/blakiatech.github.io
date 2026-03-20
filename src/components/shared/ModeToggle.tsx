import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const [theme, setTheme] = React.useState<"light" | "dark">("light")
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
        const isDarkMode = document.documentElement.classList.contains("dark")
        setTheme(isDarkMode ? "dark" : "light")
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        document.documentElement.classList[newTheme === "dark" ? "add" : "remove"]("dark")
        localStorage.setItem("theme", newTheme)
    }

    // Prevent hydration mismatch by rendering a placeholder or default until mounted
    // Or just accept the initial render might be generic
    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-muted transition-colors opacity-0"
                aria-hidden="true"
            >
                <Sun className="h-5 w-5" />
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-muted transition-colors"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
            {theme === "dark" ? (
                <Moon className="h-5 w-5 transition-all text-primary" />
            ) : (
                <Sun className="h-5 w-5 transition-all text-primary" />
            )}
        </Button>
    )
}
