import React from 'react';

const userHoc = (WrappedComponent, arg1) => {
    return (props) => (
        <div>
            <WrappedComponent/>
        </div>
    )
}
 
export default userHoc;