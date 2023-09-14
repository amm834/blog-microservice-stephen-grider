'use client'
import React, {FormEvent, useState} from 'react';
import axios from "axios";

const PostCreate = ({
                        postId,
                        onCommentCreated,
                    }: {
    postId: string,
    onCommentCreated?: () => void
}) => {
    const [content, setContent] = useState('')


    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (onCommentCreated) {
            onCommentCreated()
        }

        axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content,
        })
            .then((res) => {
                console.log('comments', res.data)
            })
        setContent('')
    }

    return (
        <div>
            <h1>Comment Post</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button type={"submit"}>Send</button>
            </form>
        </div>
    );
};

export default PostCreate;
