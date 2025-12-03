import type { Metadata } from "next";
import { Mountains_of_Christmas, Poppins } from "next/font/google";
import "./globals.css";
import Snowfall from "@/components/Snowfall";
import { WishProvider } from "@/context/WishContext";

const christmasFont = Mountains_of_Christmas({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-christmas",
});

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Christmas Wishlist",
  description: "Share your Christmas wishes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${christmasFont.variable} ${poppins.variable}`}>
        <WishProvider>
          <Snowfall />
          <main className="container">
            {children}
          </main>
        </WishProvider>
      </body>
    </html>
  );
}
