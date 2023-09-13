'use client'
import React, {ReactNode, useEffect, useState} from 'react';
import PostCreate from "../components/PostCreate";
import axios from "axios";
import CommentCreate from "../components/CommentCreate";

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
                        <h3>{post.title}</h3>

                        <div>
                            <CommentCreate postId={post.id}/>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="container py-3">
                <h1>Posts</h1>
                {renderedPosts}

                <PostCreate/>
            </div>
        );
    }
;

export default PostList;
