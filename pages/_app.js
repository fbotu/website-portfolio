// * COMPONENTS
import Header from '../components/Header';
import Footer from '../components/Footer';
// * STYLES
import '../styles/globals.scss'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
