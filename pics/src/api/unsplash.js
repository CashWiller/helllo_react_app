import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 76d224391b87e02a12811c877bcca2fc045d70f2b49ff4e3e6a240c8b5110ede'
    }
});