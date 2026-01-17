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
  title: "Cameron Stanley | Front-End Developer Blog",
  description:
    "Personal blog documenting Cameron Stanley’s journey in front-end web development, projects, and lessons learned.",
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
