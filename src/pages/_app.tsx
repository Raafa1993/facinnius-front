import { AppProps } from 'next/app'
import '../styles/styles.scss'
import i18n from '../i18n';
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // if (router.locale) {
  //   i18n.changeLanguage(router.locale)
  // }
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  ) 
}

export default MyApp
