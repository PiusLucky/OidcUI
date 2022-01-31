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
  redirectUri: 'https=//oidc-ui.vercel.app/oauth-callback',
  scope: 'openid email profile'

  //secure version
  // authority: process.env.REACT_APP_AUTHORITY,
  // clientId: process.env.REACDT_APP_CLIENT_ID,
  // redirectUri: `${process.env.REACT_APP_DOMAIN}/${process.env.REACT_APP_REDIRECT_URI}`,
  // scope: `${process.env.REACT_APP_SCOPE_1} ${process.env.REACT_APP_SCOPE_2} ${process.env.REACT_APP_SCOPE_3}`
};

export default oidcConfig;
