import getAllposts from '../lib/getAllposts'


export default async function Posts(){
    const posts = await getAllposts();
    console.log(posts)
    return(
        <div>

            <ul>
                {posts.map((posts)=> (
                    <li key={posts.id}>{posts.title}</li>
                    // <li key={post.id}>{post.title}</li>
                    // <li key={post.id}>{post.phone}</li>
                ))}
            </ul>

        </div>
    )
}

