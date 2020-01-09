import React from 'react';
import { inject, observer } from "mobx-react";

const Explore = (props) => {
    return (
        
        <div>
            {props.userStore.usersBooks}
        </div>
    );
};

export default inject('userStore')(observer(Explore));