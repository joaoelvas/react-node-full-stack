import React from 'react';
import { Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index'
import News from './components/Articles/News/Main/index'
import Videos from './components/Articles/Videos/Main/index'
import SignIn from './components/SignIn/signin';
import Dashboard from './components/Dashboard/dashboard';

import PrivateRoute from './components/AuthRoutes/private_routes';
import PublicRoute from './components/AuthRoutes/public_routes';

const Routes = (props) => {
    return (
        <Layout user={props.user}>
            <Switch>
                <PublicRoute {...props} restricted={false} path="/articles/:id" exact component={NewsArticle}/>
                <PublicRoute {...props} restricted={false} path="/videos/:id" exact component={VideoArticle}/>
                <PublicRoute {...props} restricted={false} path="/news" exact component={News}/>
                <PublicRoute {...props} restricted={false} path="/videos" exact component={Videos}/>
                <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
                <PublicRoute {...props} restricted={true} path="/sign-in" exact component={SignIn}/>
                <PublicRoute {...props} restricted={false} path="/" component={Home}/>
            </Switch>
        </Layout>
    );
}

export default Routes;