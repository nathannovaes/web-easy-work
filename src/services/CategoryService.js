import axios from "axios";
import { toast } from 'react-toastify';
import { baseUrl } from '../supports/ApiSupport';

export const getCategories = async () => {
    return axios.get(`${baseUrl}/api/categories`);
};

export const createCategory = async (name) => {
    return axios.post(`${baseUrl}/api/category`, {name})
    .then(response =>{
        toast.success('Categoria criada com sucesso!');
    })
    .catch(error => {
        toast.error('Não foi possível criar a categoria.');
    });
};

export const deleteCategory = async (categoryId) => {
    return axios.delete(`${baseUrl}/api/category/${categoryId}`)
    .then(response =>{
        toast.success('Categoria deletada com sucesso!');
        setTimeout(() => {window.location.reload()}, 2000);
    })
    .catch(error => {
        toast.error('Não foi possível deletar a categoria.');
    });
};

export const getCategory = async (categoryId) => {
    return axios.get(`${baseUrl}/api/category/${categoryId}`);
};
