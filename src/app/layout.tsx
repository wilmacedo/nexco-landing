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
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navbar />

          <div className="pt-24">{children}</div>
        </main>
      </body>
    </html>
  );
}
