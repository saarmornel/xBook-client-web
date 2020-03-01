import React from 'react';
import { RequestBookGrid } from './BookGrid';
import { inject,observer } from "mobx-react";
import EmptyState from '../components/EmptyState';

const IncomingRequests = ({requestStore}) => {
    return !requestStore.incoming.length ? 
            <EmptyState title="No requests to show"/>
    : (
        <RequestBookGrid books={requestStore.incoming} isIncoming={true}/>
    );
};

export default inject('requestStore')(observer(IncomingRequests));