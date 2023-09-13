'use client'
import React, {FormEvent, useState} from 'react';
import axios from "axios";

const PostCreate = () => {
    const [title, setTitle] = useState('')


    function onPostCreate(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        axios.post('http://localhost:4000/posts', {
            title
        })
            .then((res) => {
            console.log(res.data)
        })
        setTitle('')
    }

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={onPostCreate}>
                <input type="text" onChange={e => setTitle(e.target.value)}/>
                <button type={"submit"}>Create Post</button>
            </form>
        </div>
    );
};

export default PostCreate;
