import React,{useEffect} from 'react';
import { RequestBookGrid } from './BookGrid';
import { inject,observer } from "mobx-react";

const OutgoingRequests = ({requestStore}) => {
    
    return (
        <RequestBookGrid books={requestStore.outgoing} isIncoming={false} />
    );
};

export default inject('requestStore')(observer(OutgoingRequests));