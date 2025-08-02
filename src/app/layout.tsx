import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata = {
  title: "CRM",
  description: "CRM App Settings",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
