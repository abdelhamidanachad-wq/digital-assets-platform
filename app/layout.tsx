import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAGHREB TOKEN | A Digital Asset Ecosystem",
  description: "Explore MAGHREB TOKEN: a community-first digital asset ecosystem concept connecting education, utility, culture and participation. Target launch 2027.",
  applicationName: "MAGHREB TOKEN",
  keywords: ["MAGHREB TOKEN", "MGT", "digital asset ecosystem", "community", "2027"],
  openGraph: {
    title: "MAGHREB TOKEN | A Digital Asset Ecosystem",
    description: "A new dimension of digital participation. Explore the MGT project, ecosystem, community and 2027 roadmap.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
