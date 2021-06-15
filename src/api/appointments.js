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

export async function getMyAppointments(){

    try {
        
        const url = `${API_URL}/user-appointments`; 
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

export async function cancelAppointmentApi(idAppointment){

    try {
        
        const url = `${API_URL}/cancel-appointment`; 
        const params = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": "Bearer " + getTokenApi()
            },
            body: JSON.stringify(idAppointment),
        };

        const response = await fetch(url, params);
        const result = await response.json();
        return result; 
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function registerAppointmentApi(formData){
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