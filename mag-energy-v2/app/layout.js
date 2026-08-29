import { Fraunces, Work_Sans, Space_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientEffects from "../components/ClientEffects";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "M.A.G ENERGY — Power Generation & Wholesale Supply, Juba, South Sudan",
  description:
    "M.A.G ENERGY generates electricity in Juba, South Sudan and supplies it wholesale to local distribution partners, building a more reliable grid for the country.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${workSans.variable} ${spaceMono.variable}`}>
        <Header />
        {children}
        <Footer />
        <ClientEffects />
      </body>
    </html>
  );
}
