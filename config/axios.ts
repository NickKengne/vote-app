import axios from 'axios'

export const API_BASE_URL:string  = "http://192.168.1.132:8081/api/v1/booker"

// get request
export const getAxios = async (url:string,data:any,headers:any) => {
  return axios
    .get(`${API_BASE_URL}${url}`, { responseType: 'json',headers:headers })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
     return  error;
    });
};


// post request
export const postAxios = async (url:string, data:any,headers:any) => {
    try {
    const response = await axios.post(`${API_BASE_URL}${url}`, data, headers);
    return response.data;
  } catch (error) {
    return error;
  }
}

// put request
export const putAxios = async (url:string, data:any, base=API_BASE_URL) => {
    try {
    const response = await axios.put(`${base}${url}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
}

// delete request
export const deleteAxios = async (url:string,data:any) => {
    try {
    const response = await axios.delete(`${API_BASE_URL}${url}`,data);
    return response.data;
  } catch (error) {
    return error;
  }
}