import axios from "axios"

//get all posts
const url = "/posts"
export async function getAllPosts (){
    const response = await axios.get(url)
    
    // setPosts(response.data.posts);
    return response.data.posts
}
// get single post
export async function getOnePost (slug){
    const response = await axios.get(`${url}/${slug}`)
    
    // setPosts(response.data.posts);
    return(response.data.post[0])
}
