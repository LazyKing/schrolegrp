import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//import { hashHistory, Router } from 'react-router'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import routes from './Routes';

ReactDOM.render(<Router routes={routes} history={browserHistory} />, document.getElementById('root'));
registerServiceWorker();
