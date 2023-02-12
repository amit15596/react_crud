import axiosClient from "./apiClient";

const addNewRegister = async(data) => {
    try {
        const result = await axiosClient.post('/signup', data);
        return result;
    } catch(error){
        console.error(error)
    }
}

const login = async(data) => {
    try{
        const result = await axiosClient.post('/login', data);
        return result;
    } catch(error){
        console.error(error)
    }
}

const logout = async(data) =>{
    try {
        const result = await axiosClient.delete('/logout', data)
        return result;
    } catch(error){
        console.error(error)
    }
}

export { addNewRegister, login, logout};