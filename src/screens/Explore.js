import React, {useEffect} from 'react';
import { inject, observer } from "mobx-react";
import { UserBookGrid } from '../components/BookGrid'

const Explore = (props) => {
    useEffect(()=>{props.bookStore.pullBooks()},[])
    return (
        <UserBookGrid books={props.bookStore.books}/>
    );
};

export default inject('bookStore')(observer(Explore));