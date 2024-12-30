import { Questrial } from "next/font/google";

import "@fonts/css/switzer.css";
import "./globals.css";

import "@fonts/font-awesome.min.css";

import "@css/plugins/bootstrap-grid.css";

import "@css/plugins/swiper.min.css";

import "@css/plugins/magnific-popup.css";

import Preloader from "@/layouts/Preloader";
import "@css/style.css";

const secondary_font = Questrial({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: "Shiro Concepts Investment",
  description:
    "Shiro Concepts Investment is a visionary company based in Dubai, specializing in transforming ideas into unique realities and managing them to achieve excellence in their respective industries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${secondary_font.variable}`}>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
