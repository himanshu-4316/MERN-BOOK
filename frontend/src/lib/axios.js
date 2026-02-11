import axios from "axios";
const api = axios.create({
    //baseURL: 'http://localhost:3000'
    baseURL:'https://mern-book-73f8.onrender.com'
})
export default api
