/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';
/* eslint-enable import/no-unresolved, import/extensions */

// Import CSS reset and Global Styles
import './global-styles';

// Import root routes
import createRoutes from './routes';

// Set up the router, wrapping all Routes in the App component
const rootRoute = {
  component: App,
  childRoutes: createRoutes()
};

const render = () => {
  ReactDOM.render(
    <div>
        <Router history={browserHistory} routes={rootRoute} render={applyRouterMiddleware(useScroll())}/>
    </div>,
    document.getElementById('app')
  );
};

render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
