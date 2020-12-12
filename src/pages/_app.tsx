import App, { AppProps } from 'next/app';
import { ThemeProvider } from 'react-jss';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { useStore, useApollo } from 'state-library/lib';
import { themes } from 'theme-library/lib';
import { appWithTranslation } from '../../i18n';

const theme = themes.base.styles;
const gateway = process?.env?.GATEWAY_URL || 'http://localhost:8008';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  const apolloClient = useApollo(pageProps.initialApolloState, gateway);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  )
};

MyApp.getInitialProps = async (appContext: any): Promise<any> => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);
