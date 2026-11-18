import Footer from "@/modules/Footer/Footer";
import Header from "@/modules/Header/Header";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
