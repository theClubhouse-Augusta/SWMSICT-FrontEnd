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
     path: '/Results',
     name: 'Results',
     getComponent(nextState, comMod) {
       import('containers/Results')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
   },
   {
    path: '/Education',
    name: 'Education',
    getComponent(nextState, comMod) {
      import('containers/Education')
        .then(loadModule(comMod))
        .catch(errorLoading);
      },
    },
   {
    path: '/Services',
    name: 'Services',
    getComponent(nextState, comMod) {
      import('containers/Services')
        .then(loadModule(comMod))
        .catch(errorLoading);
      },
    },
    {
     path: '/Submission',
     name: 'Submission',
     getComponent(nextState, comMod) {
       import('containers/Submission')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
   },
    {
     path: '/Contact',
     name: 'Contact',
     getComponent(nextState, comMod) {
       import('containers/Contact')
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
