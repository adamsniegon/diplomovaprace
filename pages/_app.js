import '../styles/globals.css';
import Layout from '../components/Layout';

/**
 * Wrapps whole app in Layout component
 * @returns Wrapped app in Layout
 */
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
