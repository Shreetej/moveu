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

  const addPost= async(data)=>{
    console.log(data)
    const newPost = await addBlog(data)
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


  return (
    <PostContext.Provider value={{posts,getPosts,editPost,deletePost,addPost}}>
        {props.children}
    </PostContext.Provider>
  )
}

export default PostState;