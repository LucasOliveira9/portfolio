import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header.Geral";
import Footer from "./components/Footer.Geral";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LO - Home",
  description: "Home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
