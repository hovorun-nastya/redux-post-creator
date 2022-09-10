import React from 'react';
import {useDispatch} from "react-redux";
import {deletePost} from "./postsSlice";
const DeleteButton = ({post}) => {
   const dispatch = useDispatch()
    return (
        <div>
            <button type="button"
            onClick={() => dispatch(deletePost( {postId: post.id}))}> Delete post </button>
        </div>
    );
};

export default DeleteButton;