import { toast } from "react-toastify";
import { myAxios } from "./helper";

export const login = (user) =>{
    return myAxios
        .post('/users/login',user)
        .then((response)=>{
            // console.log(response.data)
            if (response.data.user.username){
                // console.log(response.data.user.username)
                localStorage.setItem("Authorization", JSON.stringify(response.data.authtoken));
                localStorage.setItem("User", JSON.stringify(response.data.user.username));
            }
            toast.success("Welcome "+response.data.user.username.toUpperCase())
            console.log("after toast success")
            return response.data;
        })
        .catch((error)=>{
            console.log(error)
            toast(error.response);
        });
}

export const GetBlog =()=>{
    return myAxios
        .get('/posts/')
        .then((response)=>{
//            console.log(response.data)
            return response.data;
        })
        .catch((error)=>{
            console.log(error)
            toast(error.response.data);
        });
}

export const GetPostImage =(imagepath)=>{
    return myAxios
        .get('/posts/upload/'+imagepath)
        .then((response)=>{
//            console.log(response.data)
            return response.data;
        })
        .catch((error)=>{
            console.log(error)
            toast(error.response.data);
        });
}

export const addImage= (file)=>{
    console.log(file)
    return myAxios.post('/posts/upload',file,{headers: { "Content-Type": "multipart/form-data" }})
    .then((response)=>{
        console.log(response.data)
        toast.success("Filepath: "+response.data.msg)
        return response.data.msg
    })
    .catch((err)=>{
        console.log(err)
        toast.error(err.data)
    })
}

export const addBlog =(post)=>{
    console.log(post)
    return myAxios
        .post('/posts/',post)
        .then((response)=>{
            console.log(response.data.data._id)
            toast.success("Post added successfully: "+response.data.data._id)
            return response.data;
        })
        .catch((error)=>{
            console.log(error)
            toast(error.data);
        });
}

export const editBlog =(post)=>{
    return myAxios
        .put('/posts/'+post._id,post)
        .then((response)=>{
            console.log(response.data)
            toast.success(response.data.msg)
            return response.data;
        })
        .catch((error)=>{
            console.log(error)
            toast(error.response.data);
        });
}

export const deleteBlog =(id)=>{
    return myAxios
        .delete('/posts/'+id)
        .then((response)=>{
            console.log(response.data)
            toast.success("Post deleted successfully: "+response.data.data_id)
            return response.data;
        })
        .catch((error)=>{
            console.log(error)
            toast(error.response.data);
        });
}

export const GetEnquiry =()=>{
    return myAxios
        .get('/enquires/')
        .then((response)=>{
            // console.log(response.data)
            // toast.success("Your Enquiry is submitted successfully: "+response.data.data._id)
            return response.data;
        })
        .catch((error)=>{
            console.log(error)
            toast(error.response.data);
        });
}

export const editEnquiry =(enquiry)=>{
    return myAxios
        .put('/enquires/'+enquiry._id,enquiry)
        .then((response)=>{
            console.log(response)
            toast.success(response.data.msg)
            return response.data;
        })
        .catch((error)=>{
            console.log(error)
            toast(error.response.data);
        });
}

export const sendMessage = (enquiry) =>{
    return myAxios
        .post('/enquires/',enquiry)
        .then((response)=>{
            console.log(response.data.data._id)
            toast.success("Your Enquiry is submitted successfully: "+response.data.data._id)
            return response.data;
        })
        .catch((error)=>{
            console.log(error)
            toast(error.response.data);
        });
}

export const isLoggedIn=()=>{
    let user = localStorage.getItem('Authorization');
    //console.log(user)
    if(user!=null){
        return localStorage.getItem('User')
    };
    console.log('returning false')
    return false;
};

export const logout = () => {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("User");
};

export const getCurrentUser = () => {
    let usertoken = JSON.parse(localStorage.getItem('Authorization'));
    console.log(usertoken);
    return JSON.parse(localStorage.getItem("Authorization"));
};
