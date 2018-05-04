import React from 'react';
import FontAwesome from 'react-fontawesome';
import moment from 'moment'

import styles from './card_info.css';

const CardInfo = (props) => {

    const teamName = (teams, team) => {
        let data = teams.find((item) => {
            return item.teamId === team
        })
        if(data) {
            return data.name
        }
    }

    const formatDate = (date) => {
        return moment(date).format(' hh:mm MM-DD-YYYY')
    }

    return (
        
        <div className={styles.card_info}>
            <span className={styles.team_name}>
                {teamName(props.teams, props.team)}
            </span>
            <span className={styles.date}>
                <FontAwesome name="clock-o"/>
                {formatDate(props.date)}
            </span>
        </div>
    ) 
}
 
export default CardInfo;