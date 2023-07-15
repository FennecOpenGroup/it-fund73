import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main as MainPage } from '../pages/main/Main';
import { AboutUs as AboutUsPage } from '../pages/aboutUs/AboutUs';
import { Calendar as CalendarPage } from '../pages/calendar/Calendar';
import { Education as EducationPage } from '../pages/education/Education';
import { Companies as CompaniesPage } from '../pages/companies/Companies';
import { News as NewsPage } from '../pages/news/News';
import { store } from '../reducers/store';
import {
  ROUTE_ABOUTUS,
  ROUTE_CALENDAR,
  ROUTE_MAINPAGE,
  ROUTE_EDUCATION,
  ROUTE_COMPANIES,
  ROUTE_NEWS,
} from '../constants/routes';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route key={ROUTE_MAINPAGE} exact path={ROUTE_MAINPAGE} component={MainPage} />
        <Route key={ROUTE_ABOUTUS} exact path={ROUTE_ABOUTUS} component={AboutUsPage} />
        <Route key={ROUTE_CALENDAR} exact path={ROUTE_CALENDAR} component={CalendarPage} />
        <Route key={ROUTE_EDUCATION} exact path={ROUTE_EDUCATION} component={EducationPage} />
        <Route key={ROUTE_EDUCATION} exact path={ROUTE_EDUCATION} component={EducationPage} />
        <Route key={ROUTE_COMPANIES} exact path={ROUTE_COMPANIES} component={CompaniesPage} />
        <Route
          key={`${ROUTE_MAINPAGE + ROUTE_NEWS}/:url_name`}
          exact
          path={`${ROUTE_MAINPAGE + ROUTE_NEWS}/:url_name`}
          component={NewsPage}
        />
      </Switch>
    </BrowserRouter>
  </Provider>
);
