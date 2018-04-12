import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition'

import '../css/App.css';

class TransitionComp extends Component{

    state = {
        show: true
    }

    showDiv = () => {
        this.setState({
            show: !this.state.show ? true : false
        })
    }

    render(){
        return(
            <div>
                <Transition 
                    in={this.state.show}
                    timeout={2000}
                >
                    { state => <p> {state} </p>}
                </Transition>
                <div className="showDiv" onClick={this.showDiv}>
                    Show or hide
                </div>
            </div>
        )
    }
}


export default TransitionComp;