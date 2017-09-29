const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
      {
       path: '/',
       name: 'Welcome',
       getComponent(nextState, comMod) {
         import('containers/Welcome')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
      path: '/UserInfo',
      name: 'UserInfo',
      getComponent(nextState, comMod) {
        import('containers/UserInfo')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
     {
      path: '/About',
      name: 'About',
      getComponent(nextState, comMod) {
        import('containers/About')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
    {
     path: '/Login',
     name: 'Login',
     getComponent(nextState, comMod) {
       import('containers/Login')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
   },
    {
     path: '/Login',
     name: 'Login',
     getComponent(nextState, comMod) {
       import('containers/Login')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
   },
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}
