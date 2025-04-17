import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "List of vacancies",
  description: "Showing vacancies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container">{children}</body>
    </html>
  );
}
