import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const getContactsList = async () => {
    const { data } = await axios.get('/contacts');
    return data;
};

export const addContactsList = async contact => {
    const { data } = await axios.post('/contacts', contact);
    return data;
};

export const removeContact = async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
};