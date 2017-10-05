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
<<<<<<< HEAD
       name: 'Welcome',
       getComponent(nextState, comMod) {
         import('containers/Welcome')
=======
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
>>>>>>> fefb71bf4efec44d71d1081d7369806f6cde123c
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
<<<<<<< HEAD
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
     path: '/Results',
     name: 'Results',
     getComponent(nextState, comMod) {
       import('containers/Results')
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
=======
>>>>>>> fefb71bf4efec44d71d1081d7369806f6cde123c
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
