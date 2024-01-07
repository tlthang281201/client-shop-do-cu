import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./global.css";
import FooterComponent from "@/component/footer/FooterComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppWrapper } from "@/context/context";
import NavbarHeader from "@/component/navbar/navbar";
import { Toaster } from "sonner";
const inter = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#F2F5F8" }}>
        <AppWrapper>
          <NavbarHeader />
          <div
            className="d-none d-lg-block"
            style={{ marginTop: "5.5rem" }}
          ></div>
          <div className="d-lg-none" style={{ marginTop: "7.5rem" }}></div>
          <main style={{ marginBottom: "10px" }}>{children}</main>
          <FooterComponent />
          <Toaster position="top-right" richColors />
        </AppWrapper>
      </body>
    </html>
  );
}
