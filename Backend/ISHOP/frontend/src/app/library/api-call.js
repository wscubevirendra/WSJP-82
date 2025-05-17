import { axiosApiInstance } from "./helper";

const getCategory = async (id = null) => {
    let API = "category"
    if (id != null) {
        API += `/${id}`

    }
    return axiosApiInstance.get(API).then(
        (response) => {
            return response.data;
        }
    ).catch(
        (error) => {
            return null;
        }
    )

};

const getColor = async (id = null) => {
    let API = "color"
    if (id != null) {
        API += `/${id}`
    }
    return axiosApiInstance.get(API).then(
        (response) => {
            return response.data;
        }
    ).catch(
        (error) => {
            return null;
        }
    )

};

const getProduct = async (id = null, category_slug = null, color = null, limit = 0, minPrice = null, maxPrice = null) => {
    let API = "product";

    if (id) {
        API += `/${id}`;
    }

    const query = new URLSearchParams();

    if (category_slug) query.append("category", category_slug);
    if (color) query.append("color", color);
    if (limit) query.append("limit", limit);

    if (minPrice !== null) query.append("minPrice", minPrice);
    if (maxPrice !== null) query.append("maxPrice", maxPrice);

    console.log(`API Request: ${API}?${query.toString()}`);

    try {
        const response = await axiosApiInstance.get(`${API}?${query.toString()}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
};





export { getCategory, getColor, getProduct };
