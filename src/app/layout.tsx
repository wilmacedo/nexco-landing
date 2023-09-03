import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexco",
  description: "The Next platform of Contributing and investments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <main id="home">
          <Navbar />

          <div className="pt-36 lg:pt-16">{children}</div>
        </main>
      </body>
    </html>
  );
}
