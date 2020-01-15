import React from 'react';
import { RequestBookGrid } from './BookGrid';
import { inject,observer } from "mobx-react";

const OutgoingRequests = ({requestStore}) => {
    return (
        <RequestBookGrid books={requestStore.outgoingBooks} />
    );
};

export default inject('requestStore')(observer(OutgoingRequests));