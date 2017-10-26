import React from 'react';
import ReactDOM from 'react-dom';
import App from './Container/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from "react-redux";
import Store from "./Store"
ReactDOM.render(<Provider store={Store}><MuiThemeProvider><App /></MuiThemeProvider></Provider>, document.getElementById('root'));
registerServiceWorker();