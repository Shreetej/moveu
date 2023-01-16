import {React,useState} from 'react'
import PostContext from './postContext';
import { GetBlog,deleteBlog,editBlog,addBlog } from '../../components/services/user-service';

const PostState = (props) => {

  const [posts, setposts] = useState([]);
  
  const getPosts= async()=>{
    const AllPosts = await GetBlog()
    setposts(AllPosts);
    //return AllPosts
  }

  const addPost= async(post)=>{
    const newPost = await addBlog(post)
    console.log(newPost)
    setposts(posts.concat(newPost.data));
    //return AllPosts
  }

  const editPost= async(post)=>{
    const AllPosts = await editBlog(post)
    //setposts(AllPosts);
    //return AllPosts
  }

  const deletePost= async(id)=>{
    await deleteBlog(id)
    // setposts(AllPosts);
    //return AllPosts
  }



//   useEffect(() => {
//     async function fetchblog(){
//         console.log("In post state")
//       const AllPosts = await GetBlog()
//       setposts(AllPosts);
//       console.log(posts)
//     }
//     return () => {
//       fetchblog()
//     }
//   }, [])

  return (
    <PostContext.Provider value={{posts,getPosts,editPost,deletePost,addPost}}>
        {props.children}
    </PostContext.Provider>
  )
}

export default PostState;