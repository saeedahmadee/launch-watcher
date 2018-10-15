import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import IndexPage from '../components/IndexPage';
import LaunchDetailsPage from '../components/LaunchDetailsPage';
import ListPage from '../components/ListPage';
import CalendarPage from '../components/CalendarPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={IndexPage} exact={true} />
                <Route path="/launch/:id" component={LaunchDetailsPage} />
                <Route path="/list" component={ListPage} />
                <Route path="/calendar" component={CalendarPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;