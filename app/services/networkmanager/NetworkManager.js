import axios from 'axios';
import { constants } from '../../utils/constants/Constants';

class NetworkManager {
    baseUrl = constants.webService.songsBaseURL;

    getRequestHandler = (requestMethod) => {

        return new Promise(async (resolve, reject) => {
            try {
               console.log(`${this.baseUrl}${requestMethod}`);

                const response = await axios.get(`${this.baseUrl}${requestMethod}`);
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }
    
    postRequestHandler = (requestMethod) => {

        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post(`${this.baseUrl}${requestMethod}`);
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

}

const networkManager = new NetworkManager();
export default networkManager;