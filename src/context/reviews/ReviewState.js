import {React,useState} from 'react'
import ReviewContext from './ReviewContext';
import { getReviews,deleteReview,editReview,addReview } from '../../components/services/user-service';

const ReviewState = (props) => {

  const [reviews, setreviews] = useState([]);
  
  const getreviews= async()=>{
    const AllReviews = await getReviews()
    console.log(AllReviews)
    setreviews(AllReviews);
    //return AllPosts
  }

  const addreview= async(data)=>{
    console.log(data)
    const newReview = await addReview(data)
    console.log(newReview)
    setreviews(reviews.concat(newReview.data));
    //return AllPosts
  }

  const editreview= async(review)=>{
    const AllReviews = await editReview(review)
    //setposts(AllPosts);
    //return AllPosts
  }

  const deletereview= async(id)=>{
    await deleteReview(id)
    // setposts(AllPosts);
    //return AllPosts
  }


  return (
    <ReviewContext.Provider value={{reviews,getreviews,editreview,deletereview,addreview,setreviews}}>
        {props.children}
    </ReviewContext.Provider>
  )
}

export default ReviewState;