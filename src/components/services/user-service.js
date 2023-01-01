import { myAxios } from "./helper";

export const login = (user) =>{
    return myAxios
        .post('/users/login',user)
        .then((response)=>{
            if (response.data.name) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
              return response.data;
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
