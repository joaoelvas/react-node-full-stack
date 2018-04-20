import React, { Component } from 'react';
import FormFields from '../widgets/Forms/form_fields'

import { firebaseDB } from '../firebase';

class User extends Component {

    state = {
        formData: {
            name: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation: {
                    required: true,
                    minLen: 3
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            lastname: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Last name',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your lastname'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            message: {
                element: 'textarea',
                value: '',
                label: true,
                labelText: 'Message',
                config: {
                    name: 'message_input',
                    rows: 3,
                    cols: 36
                },
                validation: {
                    required: false
                },
                valid: true,
                touched: false,
                validationMessage: ''
            },
            select: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'Age',
                config: {
                    name: 'age_input',
                    options: [
                        {
                            val: '1',
                            text: '10-20'
                        },
                        {
                            val: '2',
                            text: '20-30'
                        },{
                            val: '1',
                            text: '+30'
                        }
                    ]
                },
                validation: {
                    required: false
                },
                valid: true,
                touched: false,
                validationMessage: ''
            }
        }
    }

    updateFormHandler = (newState) => {
        this.setState({
            formData: newState
        })
    }

    submitFormHandler = (event) => {
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
        }

        for(let key in this.state.formData) {
            formIsValid = this.state.formData[key].valid && formIsValid;
        }

        if(formIsValid) {
            console.log(dataToSubmit);

            firebaseDB.ref('users').push(dataToSubmit)
                .then(() => {
                    console.log('New User Added')
                })
                .catch((e) => {
                    console.log(e)
                })

        } else {
            console.log("Form is not valid!");
        }

        

    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitFormHandler}>

                    <FormFields 
                        formdata={this.state.formData}
                        onblur={(newState) => this.updateFormHandler(newState)}
                        change={(newState) => this.updateFormHandler(newState)}
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default User;