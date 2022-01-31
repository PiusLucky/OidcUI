const oidcConfig = {
  onSignIn: async (user) => {
    window.location = '/home';
  },
  onSignOut: () => {
    window.location = '/';
  },
  // These details are hidden in a production ready app and stored in the hosting service provider's
  // environment variables | You can also use the process.env.REACT_APP_<NAME_OF_SECRET> while in dev.
  autoSignIn: false,
  authority: 'https://id-sandbox.cashtoken.africa/.well-known/openid-configuration',
  clientId: 'wprQYMZBqqx-dgszFUfQG',
  redirectUri: 'http://localhost:3000/oauth-callback',
  scope: 'openid email profile'
};

export default oidcConfig;
