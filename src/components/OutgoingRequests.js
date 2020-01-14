import React from 'react';
import { BookGrid } from './BookGrid';
import { inject,observer } from "mobx-react";

const OutgoingRequests = ({requestStore}) => {
    return (
        <BookGrid books={requestStore.outgoingBooks}></BookGrid>
    );
};

export default inject('requestStore')(observer(OutgoingRequests));