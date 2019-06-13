import axios from 'axios';
import { GET_REQUEST,PUT_REQUEST, POST_REQUEST } from '../../constants';
import { formatUrl ,formatQueryParams } from '../../utils/format-url';
const doGetRequest = async (url,queryParams=null) => {
    let [result,error,queryString] = [null,null,''];
    if(queryParams) {
        queryString = formatQueryParams(queryParams); 
    }
    try {
        url = formatUrl(url,queryString);
        result = await axios.get(url);
        return result;
    }
    catch(e) {
        console.error(e);
        return null;
    }
}
const doPostRequest = async(url,formData=null) => {
    try {
        const result = await axios.post(url,formData);
        return result;
    }
    catch(e) {
        console.error(e);
        return null;
    }
}
const doPutRequest = async(url,formData=null) => {
    try {
        const result = await axios.post(url,formData);
        return result;
    }
    catch(e) {
        console.error(e);
        return null;
    }
}
export const handleServiceCall = async (...params) => {
    try {
        const [type,url,success,formParams] = params;
        switch(type) {
            case GET_REQUEST:
                return await doGetRequest(url,formParams);
            case PUT_REQUEST:
                return await doPutRequest(url,formParams);
            case POST_REQUEST:
                return await doPostRequest(url,formParams);
            default: 
                return null;
                
        }
    }
    catch(e){
        console.error(e);
        return null;
    }
    
};

