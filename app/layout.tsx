import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ElevatED Roadmap",
  description: "12-Month GTM Strategy Roadmap for ElevatED - AI-Powered College & Financial Aid Guidance Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
