import axios from "axios"


export async function getAllPosts (){
    const url = "http://localhost:8000/posts"
    const response = await axios.get(url)
    
    // setPosts(response.data.posts);
    return response.data.posts
}
