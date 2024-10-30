import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col justify-between">
        <Navbar />
        <div className="pr-50 pl-50 flex flex-col bg-shrek flex-grow items-center justify-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
