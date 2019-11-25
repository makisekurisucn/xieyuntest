import axios from 'axios';

function setToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export {
    setToken
}

export default function request(config) {
    let { method, url, data } = config;
    return axios({
        method,
        url,
        data
    }).then((res) => {
        console.log('res: ', res);
        return res.data;
    });
}