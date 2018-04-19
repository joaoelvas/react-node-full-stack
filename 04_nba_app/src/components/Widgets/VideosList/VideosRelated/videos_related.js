import React from 'react';
import styles from '../videos_list.css';
import VideosListTemplate from '../videos_list_template';

const VideosRelated = (props) => (
    <div className={styles.related_wrapper}>
        <VideosListTemplate
            data={props.data}
            teams={props.teams}/>
    </div>
)

export default VideosRelated;
