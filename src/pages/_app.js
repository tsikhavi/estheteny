import '@/styles/globals.css';
import ErrorBoundary from '@/components/ErrorBoundary';
import Layout from '@/components/layout/MainLayout';
import CookieComponent from '@/components/CookieComponent';

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CookieComponent />
    </ErrorBoundary>
  );
}
