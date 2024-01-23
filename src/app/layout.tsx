import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Providers } from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Cookbook',
    description: "Project cookbook for project managers",
}

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" >
            <body className={inter.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>

    )
}
