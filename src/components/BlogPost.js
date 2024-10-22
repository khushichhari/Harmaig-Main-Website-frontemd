// src/components/BlogPost.jsx
import React from 'react';

const BlogPost = ({ title, date, content }) => {
    return (
        <div className="blog-post">
            <h2>{title}</h2>
            <p><em>{date}</em></p>
            <p>{content}</p>
        </div>
    );
}

export default BlogPost;
