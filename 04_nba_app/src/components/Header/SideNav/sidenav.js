import React from 'react';
import RSSideNav from 'react-simple-sidenav';

import SideNavItems from './sidenav_items'

const SideNav = (props) => {
    return (
        <div>
            <RSSideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background: '#242424',
                    maxWidth:'220px'
                }}
            >
                <SideNavItems {...props}/>
            </RSSideNav>
        </div>
    )
}
 
export default SideNav;