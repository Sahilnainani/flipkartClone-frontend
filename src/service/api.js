import axios from 'axios'

const URL="http://localhost:8000"
export const authenticateSignup= async (data)=>{
    try{
        return await axios.post(`${URL}/signup`,data)
    }
    catch(error){
        console.log("Error while calling signup api:",error)    
    }
}
export const authenticateLogin= async (data)=>{
    try{
        let result = await axios.post(`${URL}/login`,data)
        console.log(result)
        return(result)
    }
    catch(error){
        console.log("Error while calling login api:",error)    
        return error.response
    }
}
export const payWithPaytm=async(data)=>{
    try{
        let result=await axios.post(`${URL}/payment`,data)
        return result.data
    }
    catch(error){
        console.log("Error while calling payment api",error)
    }
}