import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "src/app/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});

export const metadata: Metadata = {
  title: "Alexander Perocho",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
