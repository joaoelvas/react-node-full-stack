import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {firebaseTeams, firebaseArticles, firebaseLooper } from '../../../firebase'
import styles from './news_list.css'

import Button from '../Buttons/buttons'
import CardInfo from '../CardInfo/card_info'

class NewsList extends Component {
    
    state = {
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount - 1,
        amount: this.props.amount,
        teams: []
    }

    componentWillMount() {
        this.request(this.state.start, this.state.end);
    }

    renderNews = (type) => {
        let template = null;

        switch(type) {
            case('card'):
                template = this.state.items.map((item, i) => (

                    <CSSTransition
                        classNames={{
                            enter: styles.newslist_wrapper,
                            enterActive: styles.newslist_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div key={i}>
                            <div className={styles.newslist_item}>
                                <Link to={`/articles/${item.id}`}>
                                    <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                    
                ));
                break;
            case('cardMain'):
                template = this.state.items.map((item, i) => (

                    <CSSTransition
                        classNames={{
                            enter: styles.newslist_wrapper,
                            enterActive: styles.newslist_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >   
                        <Link to={`/articles/${item.id}`}>
                            <div className={styles.flex_wrapper}>
                                <div className={styles.left}
                                    style={{
                                        background:`url('./images/articles/${item.image}')`
                                    }}
                                >
                                    <div></div>
                                </div>
                                <div className={styles.right}>
                                    <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                        </Link>
                    </CSSTransition>
                
                ));
                break;
            default:
                template = null;
        }

        return template;
    }

    request = (start, end) => {

        if(this.state.teams.length < 1) {

            firebaseTeams.once('value').then((snapshot) => {
                const teams = firebaseLooper(snapshot);
                this.setState({
                    teams
                })
            })

            // axios.get(`${SERVER_URL}/teams`).then(response => {
            //     this.setState({
            //         teams: response.data
            //     })
            // })
        } 

        firebaseArticles.orderByChild("id").startAt(start).endAt(end).once('value').then((snapshot) => {
            const articles = firebaseLooper(snapshot);
            this.setState({
                items:[...this.state.items, ...articles], 
                start,
                end
            })
        }).catch(e => {
            console.log(e);
        })

        // axios.get(`${SERVER_URL}/articles?_start=${start}&_end=${end}`).then(response => {
        //     this.setState({
        //         items:[...this.state.items, ...response.data], 
        //         start,
        //         end
        //     })
        // })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end + 1, end)
    }
    
    render() {

        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    { this.renderNews(this.props.type) }
                </TransitionGroup>

                <Button
                    type="loadmore"
                    loadMore={() => this.loadMore()}
                    cta="Load More News"
                />
            </div>
        );
    }
}

export default NewsList;