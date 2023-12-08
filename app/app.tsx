import React from 'react';
import { AppProps } from 'next/app';
import { ReactKeycloakProvider } from '@react-keycloak/ssr';
import keycloak from '../utils/keycloak';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Component {...pageProps} />
    </ReactKeycloakProvider>
  );
}

export default MyApp;
