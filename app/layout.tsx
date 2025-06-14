import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import { Toaster } from '@/components/ui/sonner';

const interSans = Inter({
    subsets: ['latin'],
    weight: ['400'],
});

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400', '600'],
});

export const metadata: Metadata = {
    title: 'Komunikacja człowiek-komputer',
    description: 'Projekt',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${interSans.className} ${robotoMono.className} antialiased h-screen overflow-hidden flex flex-col`}
            >
                <Header />
                <main className="grow">{children}</main>
                <Toaster position="top-center" />
            </body>
        </html>
    );
}
