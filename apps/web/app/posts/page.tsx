'use client'
import React, {ReactNode, useEffect, useState} from 'react';
import PostCreate from "../components/PostCreate";
import axios from "axios";

const PostList = () => {
        const [posts, setPosts] = useState([])

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
                <div className="card" style={{width: '30%', marginBottom: '20px'}} key={post.id}>
                    <div className="card-body">
                        <h3>{post.title}</h3>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <h1>Posts</h1>

                {renderedPosts}

                <PostCreate/>
            </div>
        );
    }
;

export default PostList;
