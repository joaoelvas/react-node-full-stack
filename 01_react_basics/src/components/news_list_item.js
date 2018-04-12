import React from 'react'

import styles from '../css/styles.css'

const NewsItem = (props) => {
    return (
        <div className={styles.new_item}>
            <h3>{props.item.title}</h3>
            <div>
                {props.item.feed}
            </div>
        </div>
    )
}


export default NewsItem;