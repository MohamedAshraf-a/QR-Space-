import { getTranslations } from "next-intl/server";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ElectricBorder from "@/components/ElectricBorder";
import QRGeneratorClient from "@/components/QRGeneratorClient";

export default async function Home() {
  const tIndex = await getTranslations("Index");
  const tFooter = await getTranslations("Footer");
  const tHeader = await getTranslations("Header");

  const indexTranslations = {
    title: tIndex("title"),
    subtitle: tIndex("subtitle"),
    placeholder: tIndex("placeholder"),
    generateButton: tIndex("generateButton"),
    downloadButton: tIndex("downloadButton"),
    info: tIndex("info"),
  };

  const footerTranslations = {
    copyright: tFooter("copyright"),
    madeWith: tFooter("madeWith"),
    by: tFooter("by"),
  };

  const headerTranslations = {
    toggleLanguage: tHeader("toggleLanguage"),
    toggleTheme: tHeader("toggleTheme"),
  };

  return (
    <div className="relative z-10 flex flex-col min-h-screen bg-[#0c0a18]">
      <Header translations={headerTranslations} />

<main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8 pt-24 relative z-20">
        {/* غلاف كهربائي حول QR Generator */}
        <ElectricBorder
          color="#5227FF"
          speed={1.5}
          chaos={1.2}
          thickness={3}
          className="p-8"
        >
          <QRGeneratorClient translations={indexTranslations} />
        </ElectricBorder>
      </main>

      <Footer translations={footerTranslations} />
    </div>
  );
}
