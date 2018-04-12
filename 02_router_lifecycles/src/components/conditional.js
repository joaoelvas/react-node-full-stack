import React from 'react';

const Conditional = () => {

    //const value = false;

    const returnValue = () => {
        return false;
    }

    const showIt = () => {
        return ( returnValue() ?
            <div>
                Hello
            </div> 
            : 
            <div>
                Bye
            </div>
        )
    }

    return (
        <div>
            {showIt()}
        </div>
    )
}
 
export default Conditional;