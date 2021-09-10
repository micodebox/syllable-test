import Axios from 'axios';
import ReactDOM from 'react-dom';
import { configure } from 'axios-hooks';

import config from 'config';

import App from './app/App';
import * as serviceWorker from './serviceWorker';

const axios = Axios.create({
  baseURL: config.apiUrl,
});

configure({ axios });

const app = <App />;

const root = document.getElementById('root');

ReactDOM.render(app, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
