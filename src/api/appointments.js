import { API_URL } from "../utils/constants";
import { getTokenApi } from "../api/token";

export async function getWaitingRoom(){

    try {
        
        const url = `${API_URL}/user-waiting-room`; 
        const params = {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": "Bearer " + getTokenApi()
            },
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result; 
    } catch (error) {
        console.log(error);
        return null;
    }
}