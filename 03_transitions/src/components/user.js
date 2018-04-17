import React, { Component } from 'react';
import UserTemplate from './user_template';

class User extends Component {

    state = {
        name: 'Francis',
        lastname: 'Jones',
        age:25,
        hobbies: ['run','jump'],
        spanish: false,
        message() {console.log('hey')},
        car:{brand:"Ford", model:"Focus"},
        mother: "Jane"
    }

    render() {
        return (
            <div>
                <UserTemplate {...this.state}/>
            </div>
        );
    }
}

export default User;