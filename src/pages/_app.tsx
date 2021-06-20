import { ToastProvider } from 'react-toast-notifications';
import { HomeProvider } from '../contexts/home';
import { AppErrorProvider } from '../contexts/AppError';
import { ToastAppProvider } from '../contexts/toast';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <HomeProvider>
      <ToastProvider>
        <ToastAppProvider>
          <AppErrorProvider>
            <Component {...pageProps} />
          </AppErrorProvider>
        </ToastAppProvider>
      </ToastProvider>
    </HomeProvider>
  )
}

export default MyApp
