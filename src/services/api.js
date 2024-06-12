import axios from 'axios';

const API_KEY = 'fda64120d25098a9d78eecab174e919a';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return error.messagee
        
    }
}