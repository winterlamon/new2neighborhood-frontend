import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import { BrowserRouter as Router, Route } from 'react-router-dom';


injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
