import React from 'react';
import { BookGrid, RequestBookGrid } from './BookGrid';
import { inject,observer } from "mobx-react";

const IncomingRequests = ({requestStore}) => {
    return (
        <RequestBookGrid books={requestStore.incomingBooks}/>
    );
};

export default inject('requestStore')(observer(IncomingRequests));