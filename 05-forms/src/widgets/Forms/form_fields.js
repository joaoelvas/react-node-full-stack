import React from 'react';

const FormFields = (props) => {

    const renderFields = () => {
        const formArray = [];

        for(let elementName in props.formdata) {
            formArray.push({
                id:elementName,
                settings: props.formdata[elementName]
            })
        }

        return formArray.map((item, i) => {
            return (
                <div key={i} className="form_element">
                    {renderTemplates(item)}
                </div>
            )
        })


    }

    const changeHandler = (event, id, blur) => {
        const newState = props.formdata;

        newState[id].value = event.target.value;
        
        if(blur) {
            let validData = validate(newState[id]);
            newState[id].valid = validData[0];
            newState[id].validationMessage = validData[1];
        }
        newState[id].touched = blur;
        
        props.change(newState);
    }

    const validate = (element) => {
        console.log(element)
        let error = [true,''];

        if(element.validation.minLen) {
            const valid = element.value.length >= element.validation.minLen;
            const message = `${ !valid ? 'Must be grater or equal than ' + element.validation.minLen: ''}`

            error = !valid ? [valid,message] : error;
        }

        if(element.validation.required) {
            const valid = element.value.trim() !== '';
            const message = `${ !valid ? 'This field is required' : ''}`

            error = !valid ? [valid,message] : error;
        }

        return error;
    }

    const showValidation = (data) => {
        let errorMessage = null;

        if(data.validation &&  !data.valid) {
            errorMessage = (
                <div className="label_error">
                    {data.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }

    const renderTemplates = (item) => {
        let template = null;
        let values = item.settings;

        switch(values.element) {
            case('input'):
                template = (
                    <div>
                        {showlabel(values.label, values.labelText)}
                        <input 
                            {...values.config}
                            value={values.value}
                            onBlur={
                                (event) => changeHandler(event, item.id, true)
                            }
                            onChange={
                                (event) => changeHandler(event, item.id, false)
                            }
                        />
                        {showValidation(values)}
                    </div>
                )
                break;
            case('textarea'):
                template = (
                    <div>
                        {showlabel(values.label, values.labelText)}
                        <textarea
                            {...values.config}
                            value={values.value}
                            onChange={
                                (event) => changeHandler(event, item.id)
                            }
                        />
                    </div>
                )
                break;
            case('select'):
                template = (
                    <div>
                        {showlabel(values.label, values.labelText)}
                        <select
                            value={values.value}
                            name={values.config.name}
                            onChange={
                                (event) => changeHandler(event, item.id)
                            }
                        >
                            { values.config.options.map((item,i) => (
                                <option key={i} value={item.val}> {item.text} </option>
                            ))}
                        </select>
                    </div>
                )
                break;
            default:
                template = null;
        }

        return template;
    }

    const showlabel = (show, text) => {
        return show ? <label>{text}</label> : null
    }

    return (
        <div>
            {renderFields()}
        </div>
    )
}
 
export default FormFields;