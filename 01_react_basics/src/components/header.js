import React from 'react';
import styles from '../css/styles.css'


const Header = (props) => {
    
    return (
        <header>
            <div className={styles.logo}>Logo</div>
            <input type="text" onChange={props.keywords} />
        </header>
    )
}

export default Header;