import axios from "axios";
import { toast } from 'react-toastify';
import { baseUrl } from '../supports/ApiSupport';

export const getNotices = async () => {
    return axios.get(`${baseUrl}/api/notices`);
};

export const createNotice = async (name, description, category_id) => {
    return axios.post(`${baseUrl}/api/notice`, {name, description, category_id})
    .then(response =>{
        toast.success('Notícia criada com sucesso!');
        setTimeout(() => {location.reload(true)}, 1000);
    })
    .catch(error => {
        toast.error('Não foi possível criar a notícia.');
    });
};

export const deleteNotice = async (noticeId) => {
    return axios.delete(`${baseUrl}/api/notice/${noticeId}`)
    .then(response =>{
        toast.success('Notícia deletada com sucesso!');
        setTimeout(() => {window.location.reload()}, 2000);
    })
    .catch(error => {
        toast.error('Não foi possível deletar a notícia.');
    });
};

export const getNotice = async (noticeId) => {
    return axios.get(`${baseUrl}/api/notice/${noticeId}`);
};

export const updateNotice = async (noticeId, name, description, category_id) => {
    return axios.put(`${baseUrl}/api/notice/${noticeId}`, {name, description, category_id})
    .then(response =>{
        toast.success('Notícia atualizada com sucesso!');
        setTimeout(() => {location.reload(true)}, 1000);
    })
    .catch(error => {
        toast.error('Não foi atualizar a notícia.');
    });
};
