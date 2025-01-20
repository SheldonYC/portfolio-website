import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/navigation/Footer';
import theme from '@/utils/theme';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Sheldon Ng Portfolio Website',
  description: 'Sheldon Ng\'s Portfolio Website',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
            <NavBar />
            <main style={{ marginTop: 'var(--header-height)' }}>
              {children}
            </main>
            <Footer />
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
