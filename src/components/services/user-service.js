import { toast } from "react-toastify";
import { myAxios, toCamelCase } from "./helper";

export const login = (user) =>{
    return myAxios
        .post('/users/login',user)
        .then((response)=>{
            console.log(response.data)
            if (response.data.name){
                console.log(response.data.name)
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            toast.success("Welcome "+response.data.name.toUpperCase())
            console.log("after toast success")
            return response.data;
        })
        .catch((error)=>{
            console.log(error)
            toast(error.response.data);
        });
}

export const GetBlog =()=>{
    return myAxios
        .get('/posts/')
        .then((response)=>{
            console.log(response.data)
            return response.data;
        })
        .catch((error)=>{
            console.log(error)
            toast(error.response.data);
        });
}

export const sendMessage = (enquiry) =>{
    return myAxios
        .post('/enquiries/',enquiry)
        .then((response)=>{
            return response.data;
        })
        .catch((error)=>{
            console.log(error)
        });
}

export const isLoggedIn=()=>{
    let user = localStorage.getItem('user');
    return user!=null;
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return JSON.parse(localStorage.getItem("user"));
};
