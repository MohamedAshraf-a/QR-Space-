import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
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
  title: "QR Space | Generate & Download QR Codes",
  description:
    "Easily generate and download QR codes for any text or link. Free and simple to use.",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${notoSansArabic.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* الخلفيات المتحركة */}
          <div className="cosmic-background" />
          <div className="stars" />

          {/* محتوى الصفحات */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
