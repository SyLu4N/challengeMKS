import { ReactNode } from 'react';

import { Footer } from '@/content/footer';
import { Header } from '@/content/header';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { CartProvider } from '../context/CartContext';

const montserratInit = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'MKS Sistemas',
  description:
    'Descubra a inovação tecnológica na MKS Sistemas - sua loja de referência para produtos eletrônicos de última geração. Oferecemos uma vasta gama de dispositivos e soluções, desde smartphones e laptops até sistemas domésticos inteligentes e acessórios inovadores. Com a MKS Sistemas, você pode contar com produtos de qualidade, atendimento excepcional e expertise em tecnologia para atender a todas as suas necessidades digitais. Explore nosso catálogo e leve a excelência em eletrônicos para sua vida hoje mesmo.',
  keywords: [
    'MKS Sistemas',
    'produtos eletrônicos',
    'tecnologia',
    'inovação',
    'smartphones',
    'laptops',
    'sistemas domésticos',
    'acessórios',
    'qualidade',
    'atendimento excepcional',
    'expertise',
    'catálogo',
  ],
  authors: { name: 'Luan Simões', url: 'https://sylu4n.com.br' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={montserratInit.variable}>
        <CartProvider>
          <Header />

          {children}

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
