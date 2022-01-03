import axiosInstance from "./axiosInstance";

const getAll = () => {return axiosInstance.get("/cat");}

const getOne = id =>{
    return axiosInstance.get(`/cat/${id}`);
}

const PostServices ={getAll , getOne};

export default  PostServices;