import React from 'react';
import { Auth0Provider as Auth } from '@auth0/auth0-react';

const Auth0ClientOptions: {
  domain: string;
  clientId: string;
  redirectUri: string;
} = {
  domain: `${process.env.REACT_APP_AUTH0_DOMAIN}`,
  clientId: `${process.env.REACT_APP_AUTH0_CLIENT_ID}`,
  redirectUri: window.location.origin
};

export function AuthProvider({ children }: any) {
  return <Auth {...Auth0ClientOptions}>{children}</Auth>;
}
