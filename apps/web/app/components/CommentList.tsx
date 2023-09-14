'use client'
import React, {ReactNode, useEffect, useState} from 'react';
import axios from "axios";
import CommentCreate from "./CommentCreate";
import PostCreate from "./PostCreate";

interface Comment {
    id: string,
    content: string
}

const PostList = ({postId}: { postId: string }) => {
    const [comments, setComments] = useState<Array<Comment>>([])

    const getAllCommentsByPostId = async () => {
        const response = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
        setComments(response.data)
    }

    useEffect(() => {
        getAllCommentsByPostId()
    }, []);

    
    async function onCommentCreated() {
        await getAllCommentsByPostId()
    }

    return (
        <div>
            <h6>Comments</h6>
            {comments.map(comment => {
                return <li key={comment.id}>{comment.content}</li>
            })}
            <CommentCreate postId={postId} onCommentCreated={onCommentCreated}/>
        </div>
    );
};

export default PostList;
