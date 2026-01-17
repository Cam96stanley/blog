import type { Metadata } from "next";
import { DM_Sans, Fira_Code } from "next/font/google";
import "./scss/globals.scss";
import MainLayout from "@/app/components/main-layout/MainLayout";

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-mono-sans",
});

const firaCode = Fira_Code({
  weight: "400",
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cameron Stanley | Blog",
  description:
    "A blog page for Cameron Stanley that details out my journey in web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${firaCode.variable}`}>
        <MainLayout />
        {children}
      </body>
    </html>
  );
}
