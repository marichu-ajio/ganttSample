// pages/_app.tsx
import '../src/App.scss';  // Import your global CSS here
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
