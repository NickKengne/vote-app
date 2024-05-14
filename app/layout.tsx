
 import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themProviders";
import clsx from "clsx";
// import { Toaster } from "@/components/ui/toaster";
import { Toaster }  from "@/components/ui/sonner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const interrt = Space_Grotesk({ subsets: ["latin"] });
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "WeVote",
  description: "Vote Your candidate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={clsx(
          "min-h-screen bg-background w-full flex",
          interrt.className,
          { "debug-screens": process.env.NODE_ENV === "development" }
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
            <div className="w-full h-full">{children}</div>
          <Toaster position="bottom-left" closeButton/>
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
