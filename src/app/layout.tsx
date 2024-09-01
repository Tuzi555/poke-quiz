import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Providers from "./providers";
import { ThemeProvider } from "~/components/theme-provider";
import { Toaster } from "~/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
    title: "Poké Quiz",
    description: "Who's that Pokémon?",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable}`}
            suppressHydrationWarning
        >
            <body>
                <Providers>
                    <ThemeProvider
                        defaultTheme="system"
                        attribute="class"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                        <Toaster position="bottom-center" richColors />
                    </ThemeProvider>
                </Providers>
                <SpeedInsights />
            </body>
        </html>
    );
}
