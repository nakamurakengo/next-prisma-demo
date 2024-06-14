import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maestro",
  // description: "#",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
