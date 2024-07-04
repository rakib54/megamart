import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { dbConnect } from "@/service/mongo";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MegaMart",
  description: "MegaMart, Your shopping mall",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className="font-poppins">
        <Navbar />
        {/* <Categories /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
