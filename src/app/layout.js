import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./font.css";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import BackgroundMusic from "../components/BackgroundMusic/BackgroundMusic";
import CookieConsent from "../components/Cookies/CookieConsent";
import ContactUsButton from "../components/Contactusbutton/contact_us_button";
import { Contact } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Support Studio Technologies",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ "--lineWidth": "2px" }}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="min-h-screen">{children}</main>
        {/* <ScrollToTop /> */}
        {/* <ContactUsButton /> */}
        {/* <BackgroundMusic /> */}
        <CookieConsent /> 
      </body>
    </html>
  );
}
