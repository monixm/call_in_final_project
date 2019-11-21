import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import NotStarred from "../../assets/not_starred.svg";
import Starred from "../../assets/starred.svg";
import './style.css'
import {getAddOrRemoveBookmarkAction} from '../../store/actions/bookmarkAction';

const Bookmark = props => {
    const {happening, bookmarkedHappenings} = props; //event or call
    const [bookmarked, setBookmarked] = useState(false);

    const updateBookmark = () => {
        //setBookmarked(!bookmarked);
        props.dispatch(getAddOrRemoveBookmarkAction(happening, !bookmarked)) //your action
    };

    useEffect(() => {
        if (bookmarkedHappenings) {
            setBookmarked(bookmarkedHappenings.map(bookmark => bookmark.id).includes(happening.id))
        } else {
            setBookmarked(false)
        }
    }, [bookmarkedHappenings]);

    return (
        <img
            onClick={() => updateBookmark()}
            src={bookmarked ? Starred : NotStarred}
            className='not-starred-button'
            alt=''
        />
    );

};

const mapStateToProps = state => {
    return {
        bookmarkedHappenings: state.bookmarkReducer.bookmarked
    }
};

export default connect(mapStateToProps)(Bookmark);