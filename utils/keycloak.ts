import Keycloak from 'keycloak-js';

const keycloakConfig = {
  realm: 'your-realm',
  clientId: 'your-client-id',
  url: 'http://localhost:8080/auth',
};

const keycloak = Keycloak(keycloakConfig);

export const initKeycloak = async () => {
  try {
    await keycloak.init({ onLoad: 'login-required' });
  } catch (error) {
    console.error('Keycloak initialization error:', error);
  }
};

export default keycloak;