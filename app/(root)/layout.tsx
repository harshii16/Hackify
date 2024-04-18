import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
// import Home from "@/app/pages/Home"


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div className="flex h-screen flex-col ">
          <Header />
          {children}
          <Footer /> 
        </div>

    );
  }