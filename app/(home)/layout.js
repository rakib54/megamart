import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import { Toaster } from "@/components/ui/sonner";
import { getProductCategory } from "@/database/queries/product";
import { cn } from "@/lib/utils";
import { dbConnect } from "@/service/mongo";
import { Inter } from "next/font/google";
import { deleteExpireCartAndProductBackToInventory } from "../actions/cart-action";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], variable: "--font-poppins" });

export const metadata = {
  title: "MegaMart",
  description: "MegaMart, Your shopping mall",
};

export default async function RootLayout({ children }) {
  await dbConnect();

  await deleteExpireCartAndProductBackToInventory();
  const categories = await getProductCategory();

  return (
    <html lang="en">
      <body className={cn(inter.className, poppins.className)}>
        <Toaster richColors position="top-center" />
        <Navbar show={true} />
        <Navigation categories={categories} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
