"use client";
import { Roboto } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

const robotos = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotos.className}>
      <body>{children}</body>
    </html>
  );
}
