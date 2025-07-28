
type TPost = {
    userId: number,
    id: number,
    title: string,
    body: string
}
const getPost = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data;
}

const BlogPage = async() => {
    const posts = await getPost();
    return (
        <div className="grid grid-cols-4 gap-5 px-5 py-5">
            {
                posts.map((post:TPost)=>{
                    return (
                        <div key={post.id} className="border-2 border-amber-300">
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default BlogPage;