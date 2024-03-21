import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "@/app/globals.css";

const font = Lato({
    subsets: ['latin'],  // Include the necessary character subsets
    display: "auto",    // Ensure text is visible while font loads
    weight: ['300', '400', '700']
});

export const metadata: Metadata = {
    title: "Franklin Kemta - CV [DEV]",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    );
}
