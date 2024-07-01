import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { dbConnect } from "@/service/mongo";
import "../globals.css";



export const metadata = {
  title: "Login",
  description: "Megamart",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className="font-poppins">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
