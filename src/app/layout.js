import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import ParticklesBG from "@/common/ParticklesBG/ParticklesBG";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MBCPorto",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider>
            <div>{children}</div>
          </ThemeProvider>
      </body>
    </html>
  );
}
