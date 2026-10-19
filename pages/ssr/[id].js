
export async function getServerSideProps(context) {
    const { id } = context.params;

    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        if (!res.ok) {
            return { notFound: true };
        }

        const data = await res.json();

        return {
            props: { post: data }
        };
    } catch (error) {
        throw new Error("API fetch failed. Check your internet connection.");
    }
}

function DynamicSSRPage({ post }) {
    return (
        <div>
            <h1>Dynamic SSR Post</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}

export default DynamicSSRPage;

