import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { ChakraProvider } from "@chakra-ui/react"
import PlayerDetails from './features/PlayerDetails/PlayerDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


ReactDOM.render(

  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ChakraProvider>
          <Switch>
            <Route path="/player/:id" component={PlayerDetails} />
            <Route path="/" component={App} />
          </Switch>
        </ChakraProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
