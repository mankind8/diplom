import { GlobalStyles } from "./styles/GlobalStyles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        {children}
      </body>
    </html>
  );
}
