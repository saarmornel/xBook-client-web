import React from 'react';
import { BookGrid } from './BookGrid';
import { inject,observer } from "mobx-react";

const IncomingRequests = ({requestStore}) => {
    return (
        <BookGrid books={requestStore.incomingBooks}></BookGrid>
    );
};

export default inject('requestStore')(observer(IncomingRequests));