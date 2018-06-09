import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';



ReactDOM.render(
    <Provider store={configureStore()}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
