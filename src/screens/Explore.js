import React from 'react';
import { inject, observer } from "mobx-react";
import BookGrid from "../components/BookGrid";
import BookCard from '../components/BookCard';
import { UserBookGrid } from '../components/BookGrid'

const Explore = (props) => {
    return (
        <UserBookGrid books={props.userStore.usersBooks}/>
    );
};

export default inject('userStore')(observer(Explore));