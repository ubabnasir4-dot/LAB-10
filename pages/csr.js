import React, { useEffect, useState } from 'react';
function CSRPage() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h1>Client-Side Rendered Post</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}

export default CSRPage;
