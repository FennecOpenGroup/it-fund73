import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main as MainPage } from '../pages/main/Main';
import { AboutUs as AboutUsPage } from '../pages/aboutUs/AboutUs';
import { Calendar as CalendarPage } from '../pages/calendar/Calendar';
import { Registration as RegistrationPage } from '../pages/registration/Registration';
import { Team as TeamPage } from '../pages/team/Team';
import { Docs as DocsPage } from '../pages/docs/Docs';
import { Num as NumPage } from '../pages/num/Num';
import { store } from '../reducers/store';
import {
  ROUTE_ABOUTUS,
  ROUTE_CALENDAR,
  ROUTE_MAINPAGE,
  ROUTE_REGISTRATION,
  ROUTE_TEAM,
  ROUTE_DOCS,
  ROUTE_REQUISITES,
} from '../constants/routes';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route key={ROUTE_MAINPAGE} exact path={ROUTE_MAINPAGE} component={MainPage} />
        <Route key={ROUTE_ABOUTUS} exact path={ROUTE_ABOUTUS} component={AboutUsPage} />
        <Route key={ROUTE_CALENDAR} exact path={ROUTE_CALENDAR} component={CalendarPage} />
        <Route key={ROUTE_REGISTRATION} exact path={ROUTE_REGISTRATION} component={RegistrationPage} />
        <Route key={ROUTE_TEAM} exact path={ROUTE_TEAM} component={TeamPage} />
        <Route key={ROUTE_DOCS} exact path={ROUTE_DOCS} component={DocsPage} />
        <Route key={ROUTE_REQUISITES} exact path={ROUTE_REQUISITES} component={NumPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
