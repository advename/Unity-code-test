import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from "next/app";
import SSRProvider from "react-bootstrap/SSRProvider";
import Error from "next/error";

/**
 * Main App Provider.
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  if (pageProps.error) {
    // Global Error handler
    return <Error statusCode={pageProps.error.statusCode} title={pageProps.error.message} />;
  }
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
