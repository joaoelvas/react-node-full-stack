import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index'
import News from './components/Articles/News/Main/index'
import Videos from './components/Articles/Videos/Main/index'
import SignIn from './components/SignIn/signin';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/articles/:id" exact component={NewsArticle}/>
                    <Route path="/videos/:id" exact component={VideoArticle}/>
                    <Route path="/news" exact component={News}/>
                    <Route path="/videos" exact component={Videos}/>
                    <Route path="/sign-in" exact component={SignIn}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </Layout>
        );
    }
}

export default Routes;