import { Figtree, Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-figtree',
  preload: true,
});

export const fontVariablesString = `${poppins.variable} ${figtree.variable}`;
