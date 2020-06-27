import axios from 'axios';

const baseURL = 'http://localhost:8080/blocks';

const getAllBlocks = async () => {
    const response = await axios.get(`${baseURL}`);
    return response.data;
};

export default {
    getAllBlocks
};
