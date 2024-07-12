import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sheldon's Portfolio",
  description: "Modern and minimalist portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden overflow-y-scroll">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
