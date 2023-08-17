import "../globals.css";
import { Inter } from "next/font/google";
import Provider from "../components/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <section className={inter.className}>{children}</section>
    </Provider>
  );
}
