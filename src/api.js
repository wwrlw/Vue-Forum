import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json',
    },
});
export default {
    getPosts(limit = 10){
        return apiClient.get(`/posts?_limit=${limit}`)
    },
    getPhotos(limit = 10) {
        return apiClient.get(`/photos?_limit=${limit}`)

    },
    getUsers () {
        return apiClient.get(`/users`)
    },
    getComments(postId) {
        return apiClient.get(`/posts/${postId}/comments`)
    }
}