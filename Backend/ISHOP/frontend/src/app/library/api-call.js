import { axiosApiInstance } from "./helper";

const getCategory = async () => {
    return axiosApiInstance.get("category").then(
        (response) => {
            return response.data;
        }
    ).catch(
        (error) => {
            return null;
        }
    )

};

const getColor = async () => {
    return axiosApiInstance.get("color").then(
        (response) => {
            return response.data;
        }
    ).catch(
        (error) => {
            return null;
        }
    )

};



const getCategoryById = async (id) => {
    return axiosApiInstance.get(`category/${id}`).then(
        (response) => {
            return response.data;
        }
    ).catch(
        (error) => {
            return null;
        }
    )
};


const getColorById = async (id) => {
    return axiosApiInstance.get(`color/${id}`).then(
        (response) => {
            return response.data;
        }
    ).catch(
        (error) => {
            return null;
        }
    )
};

export { getCategory, getCategoryById, getColorById, getColor };
