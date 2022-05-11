import * as axios from 'axios'

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "bfde6aaf-cd9a-4e8d-989d-670da5d77a8b"
    }

})

export const usersAPI = {
    getUsers (currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data
    })
    
    }

}

