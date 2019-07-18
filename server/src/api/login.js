import axios from 'axios';

const defaultParams = {
    type: 1
}
export function userLogin(payload) {
    const url = '/user/login';
    return axios.post(url, {
        ...defaultParams,
        ...payload
    })
}