import { toast } from "react-toastify";
import axios from "axios";


const axiosApiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})

function createSlug(text) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}

const notify = (msg, flag) => toast(msg, { type: flag ? "success" : "error" });


export { createSlug, notify, axiosApiInstance };