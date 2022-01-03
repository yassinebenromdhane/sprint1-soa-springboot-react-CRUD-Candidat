import axiosInstance from "./axiosInstance";


const getAll = () => {return axiosInstance.get("/");}
const remove = (id) => {
    return axiosInstance.delete(`/${id}`);
}
const create = data => {
    return axiosInstance.post("/", data);
}
const getOne = id =>{
    return axiosInstance.get(`/${id}`);
}
const update = ( data) => { return axiosInstance.put("/",data);};

const services ={getAll , remove , create ,getOne , update};

export default  services;