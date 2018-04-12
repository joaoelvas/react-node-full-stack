import React from 'react';

import userHoc from '../hoc/userHoc';

const User = () => {
    return (
        <div>
            User 1
        </div>
    )
}
 
export default userHoc(User, 'Hello');