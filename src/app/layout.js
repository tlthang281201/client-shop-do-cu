import { Roboto } from "next/font/google";
import Header from "@/component/navbar/navbar";
import { SectionMenu } from "@/component/section/section";
import "bootstrap/dist/css/bootstrap.min.css";
const inter = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
import styles from "./styles.css";
import FooterComponent from "@/component/footer/FooterComponent";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#F2F5F8" }}>
        <Header />
        <SectionMenu />
        <main style={{ marginBottom: "10px" }}>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
