"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SunMediumIcon } from "lucide-react";
import { MoonIcon } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button variant='outline' onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}>
      {theme === "dark" ? <SunMediumIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
