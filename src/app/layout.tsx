import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/lib/LanguageContext";
import { SmoothScrollProvider } from "@/components/animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CustomCursor from "@/components/effects/CustomCursor";
import PageTransition from "@/components/effects/PageTransition";

export const metadata: Metadata = {
  title: "سوار وعي | Sewar Waie - مركز الرعاية النفسية المتكامل",
  description: "عيادة سوار وعي - مركز رعاية نفسية متكامل يضم طاقماً مميزاً من الأخصائيين والمعالجين النفسيين. نقدم العلاج النفسي، علاج الإدمان، والاستشارات الأسرية بخصوصية وأمان تام.",
  keywords: ["سوار وعي", "Sewar Waie", "عيادة نفسية", "علاج نفسي", "علاج إدمان", "استشارات أسرية", "صحة نفسية", "السعودية"],
  authors: [{ name: "Sewar Waie Clinic" }],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "سوار وعي | Sewar Waie - مركز الرعاية النفسية المتكامل",
    description: "رعاية نفسية متكاملة في رحلتك نحو الوعي والتعافي",
    url: "https://sewarwaie.com",
    siteName: "سوار وعي | Sewar Waie",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "سوار وعي | Sewar Waie",
    description: "مركز رعاية نفسية متكامل",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased bg-[#FAFAF8] text-gray-900 min-h-screen flex flex-col">
        {/* Skip to content for accessibility */}
        <a href="#main-content" className="skip-to-content">
          انتقل إلى المحتوى الرئيسي
        </a>
        
        <LanguageProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <Header />
            <PageTransition>
              <main id="main-content" className="flex-1">
                {children}
              </main>
            </PageTransition>
            <Footer />
            <WhatsAppButton />
            <Toaster />
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
