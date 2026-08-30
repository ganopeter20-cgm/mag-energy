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
  title: "M.A.G ENERGY | Power Generation & Energy Solutions in South Sudan",
  description:
    "M.A.G ENERGY provides power generation, electricity supply, and energy infrastructure solutions in Juba and across South Sudan.",
  keywords: [
    "M.A.G ENERGY",
    "MAG ENERGY",
    "M.A.G Energy South Sudan",
    "energy company South Sudan",
    "electricity South Sudan",
    "power generation South Sudan",
    "electricity Juba",
    "solar energy South Sudan",
    "energy infrastructure South Sudan",
  ],
  verification: {
    google: "91ZMReTX-MUEnEyUnn0Uk8XC0FgAY-S4-2qz_8F4Jps",
  },
  openGraph: {
    title: "M.A.G ENERGY | Power Generation & Energy Solutions",
    description:
      "Reliable power generation and energy infrastructure solutions for South Sudan.",
    type: "website",
    locale: "en_US",
    siteName: "M.A.G ENERGY",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${workSans.variable} ${spaceMono.variable}`}
      >
        <Header />
        {children}
        <Footer />
        <ClientEffects />
      </body>
    </html>
  );
}