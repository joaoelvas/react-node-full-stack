import React, { Component } from 'react';
import { firebaseArticles, firebaseLooper, firebaseImageStorage } from '../../../firebase';

import SliderTemplates from './slider_templates';

class NewsSlider extends Component {

    state = {
        news: []
    }

    componentWillMount() {

        firebaseArticles.limitToFirst(3).once('value').then(
            (snapshot) => {
                const news = firebaseLooper(snapshot);

                // news.forEach((item, i) => {
                //     console.log(item.image)
                //     firebaseImageStorage.child(item.image).getDownloadURL().then( url => {
                //         news[i].image = url;
                //         this.setState({
                //             news
                //         })
                //     })
                // })

                const asyncFunction = (item, i, cb) => {
                    firebaseImageStorage.child(item.image).getDownloadURL().then(url => {
                        news[i].image = url;
                        cb();
                    })
                }

                let requests = news.map((item, i) => {
                    return new Promise((resolve) => {
                        asyncFunction(item,i,resolve);
                    })
                })

                Promise.all(requests).then(() => {
                    this.setState({
                        news
                    })
                })

                // this.setState({
                //     news
                // })
            }
        )

        // axios.get(`${SERVER_URL}/articles?_start=${this.props.start}&_end=${this.props.end}`).then( response => {
        //     this.setState({
        //         news: response.data
        //     })
        // })
    }

    render() {

        return (
            <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings} />
        );
    }
}

export default NewsSlider;