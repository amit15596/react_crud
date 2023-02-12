import axios from 'axios';

const axiosClient = new axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

const refeshToken = async () =>{
    const session = localStorage.getItem('refeshToken')
    const result  = await axiosClient.post('/refeshtoken', {"refreshToken":session})
    return result;
}

axiosClient.interceptors.response.use((response)=>{ return response},async(error) =>{
  const {response, config} = error
    if(response.status == 401){
        const result = await refeshToken()
        if(result.status == 200){
          localStorage.setItem('accessToken',result.data.accessToken)
        }     
    }
} )

export default axiosClient;
