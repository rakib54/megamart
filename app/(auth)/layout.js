import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { dbConnect } from "@/service/mongo";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], variable: "--font-poppins" });

export const metadata = {
  title: "Login",
  description: "Megamart",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={cn(inter.className, poppins.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
