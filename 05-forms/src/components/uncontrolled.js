import React, { Component } from 'react';

class Uncontrolled extends Component {

    handleSubmitClick = (event) => {
        event.preventDefault();

        const values = {
            name: this.name.value,
            lastname: this.lastname.value
        }
        console.log(values)
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter name</label>
                        <input 
                            type="text"
                            ref={input => this.name = input}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter lastname</label>
                        <input 
                            type="text"
                            ref={input => this.lastname = input}
                        />
                    </div>
                </form>
                <button onClick={this.handleSubmitClick}>Sign in</button>
            </div>
        )
    }
}

export default Uncontrolled;