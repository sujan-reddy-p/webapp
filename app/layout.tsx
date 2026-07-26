import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sujan — Product-minded engineer",
  description: "A portfolio of digital products, systems, and experiments.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-ink">
      <body>{children}</body>
    </html>
  );
}
