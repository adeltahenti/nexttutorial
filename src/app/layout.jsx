import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar$';
import Footer from '@/components/footer/Footer$';
import { ThemeProvider } from '@/context/ThemeContext$';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='fr'>
      <body className={montserrat.className}>
        <ThemeProvider>
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
