import { API_URL } from "../utils/constants";

export async function registerApi(formData){
    try {
        const url = `${API_URL}/register`;
        console.log(url);
        const params = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function loginApi(formData){

    console.log(formData);
    try {
        const url = `${API_URL}/authenticate`;
        console.log(url);
        const params = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}