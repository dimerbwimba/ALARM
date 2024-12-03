

import { Roboto } from "next/font/google";
import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/css/fontawesome.min.css";
import "@/public/assets/css/flaticon.min.css";
import "@/public/assets/css/nice-select.min.css";
import "@/public/assets/css/magnific.min.css";
import "@/public/assets/css/spacing.min.css";
import "@/public/assets/css/slick.min.css";
import "@/public/assets/css/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TopBarOne from "@/components/navigation-bar/tobar-one";
import MainHearder from "@/components/navigation-bar/main-hearder";
import SearchPopup from "@/components/search-popup/search-popup";
import Footer from "@/components/footer/footer";
import DrcFlagBorder from "@/components/design-utils/drc-flag-border";
import ChatAssistant from "@/components/assistant-chat/chat";

const r = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={r.className}>
      <body className="sc5">
        <SearchPopup />
        <TopBarOne />
        <MainHearder />
        {children}
        
        <DrcFlagBorder/>
        <Footer />
        <ChatAssistant/>
      </body>
    </html>
  );
}
