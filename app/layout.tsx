import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAGHREB TOKEN | Digital Asset Ecosystem",
  description: "Discover the Maghreb Token concept: a community-led digital asset ecosystem built around utility, learning and participation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
