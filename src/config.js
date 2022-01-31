// In a normal production setting, this details will be saved in .env (or environment variable)
const oidcConfig = {
  onSignIn: async (user) => {
    window.location = '/home';
  },
  onSignOut: () => {
    window.location = '/';
  },
  autoSignIn: false,
  authority: 'https://id-sandbox.cashtoken.africa/.well-known/openid-configuration',
  clientId: 'wprQYMZBqqx-dgszFUfQG',
  redirectUri: 'http://localhost:3000/oauth-callback',
  scope: 'openid email profile'
};

export default oidcConfig;
