import App, { AppProps } from 'next/app';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { useStore } from '../redux';
import { appWithTranslation } from '../../i18n';

const theme = {};

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
    </Provider>
  )
};

MyApp.getInitialProps = async (appContext: any): Promise<any> => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);
