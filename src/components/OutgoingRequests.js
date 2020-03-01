import React,{useEffect} from 'react';
import { RequestBookGrid } from './BookGrid';
import { inject,observer } from "mobx-react";
import EmptyState from '../components/EmptyState';

const OutgoingRequests = ({requestStore}) => {
    return !requestStore.outgoing.length ? 
            <EmptyState title="No requests to show"/>
    : (
        <RequestBookGrid books={requestStore.outgoing} isIncoming={false} />
    );
};

export default inject('requestStore')(observer(OutgoingRequests));