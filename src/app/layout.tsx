import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./_components/index";

const inriaSans = Inria_Sans({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Skilledge Management Industries | Commercial Cleaning Company",
    description:
        "Skilledge Management Industries is a commercial cleaning company and supply dealer proudly serving Western Pennsylvania, offering top-quality cleaning services and bulk cleaning supplies for businesses.",
    generator: "Next.js 13 + React 18 + Tailwind CSS",
    applicationName: "Skilledge Management Industries",
    keywords: [
        "commercial cleaning",
        "cleaning services",
        "Western Pennsylvania",
    ],
    authors: [
        {
            name: "Akash Kumar",
            url: "#",
        },
    ],
    creator: "Akash Kumar",
    publisher: "Skilledge Management Industries",
    formatDetection: {
        email: false,
        address: false,
        telephone: true,
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="rgba(3, 41, 84, .75)" />
                <link
                    rel="preload"
                    href="https://assets.calendly.com/assets/external/widget.js"
                    as="script"
                />
            </head>
            <body
                className={`${inriaSans.className} text-dark-gray text-lg lg:text-xl xl:text-2xl`}
            >
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
