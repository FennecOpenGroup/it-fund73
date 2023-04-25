import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main as MainPage } from '../pages/main/Main';
import { store } from '../reducers/store';
import { ROUTE_MAINPAGE } from '../constants/routes';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route key={ROUTE_MAINPAGE} exact path={ROUTE_MAINPAGE} component={MainPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
