import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';

import Main from './components/main';
import ShowRecipe from './containers/showRecipe';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/recipe/:id" component={ShowRecipe} />
          <Route path="/" component={Main} />      
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
, document.querySelector('.container'));
