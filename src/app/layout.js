import "./globals.css";


export const metadata = {
  title: "স্বস্তির ছায়া",
  description: "মানবতার কল্যাণে স্বস্তির ছায়া",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
