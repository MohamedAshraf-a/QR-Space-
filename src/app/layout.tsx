import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import Header from "../components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
});

export const metadata: Metadata = {
  title: "QR Space",
  description: "Easily generate and download QR codes for any text or link. Free and simple to use.",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: any;
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  const locale = params?.locale ?? "en";

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansArabic.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <div className="cosmic-background" />
          <div className="stars" />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
