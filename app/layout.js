import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme/theme-provider";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t='dark';}document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export const metadata = {
  title: "Portfolio of Kanika Aggarwal - Software Developer",
  description:
    "Hi, I'm Kanika Aggarwal, a Full Stack Developer specializing in the MERN stack. I enjoy building scalable web applications, learning new technologies, and turning ideas into real-world digital solutions. I’m always eager to collaborate and take on new challenges that help me grow as a developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <ToastContainer theme="colored" />
          <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
