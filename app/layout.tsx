import LocalThemeProvider from "@/components/BuiltComponents/LocalThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/BuiltComponents/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ATROX",
  description: "A tech communtiy by Atrox Dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
        <link rel='icon' type='image/png' href='/AtroxLogo.png' />
      <body className={inter.className + " bg-background"}>
        <LocalThemeProvider>
          <Navbar />
          {children}
        </LocalThemeProvider>
      </body>
    </html>
  );
}
