"use client"

import { ThemeProvider } from "next-themes";

export default function LocalThemeProvider({ children }: { children: React.ReactNode }) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
