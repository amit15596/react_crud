import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRouter = (props) =>{
    const { Component} = props
    const navigate = useNavigate()
    useEffect(()=>{
        const login = localStorage.getItem('accessToken')
        if(!login){
            navigate('/login',{replace:true})
        }
    },[]);
    return(
        <Component/>
    )
}
export default ProtectedRouter;