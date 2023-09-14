'use client'
import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import axios from "axios";
import CommentCreate from "./CommentCreate";
import PostCreate from "./PostCreate";
import CommentList from "./CommentList";

interface Post {
    id: string,
    title: string
}

const PostList = () => {
    const [posts, setPosts] = useState<Array<Post>>([])

    const getAllPosts = async () => {
        const response = await axios.get('http://localhost:4000/posts')
        setPosts(response.data)
    }

    useEffect(() => {
        getAllPosts()
        console.log(posts)
    }, []);


    const renderedPosts: ReactNode = Object.values(posts).map(post => {
        return (
            <div className="card mb-3" key={post.id}>
                <div className="card-body">
                    <h3 className="card-title">{post.title}</h3>
                    <CommentList postId={post.id}/>
                </div>
            </div>
        )
    })
    return (
        <div>
            <PostCreate/>
            <hr/>

            {renderedPosts}

        </div>
    );
};

export default PostList;
