import { commmonAPI } from "./commmonAPI"
import SERVER_URL from "./serverUrl"


//register API
export const registerAPI=async(student)=>{
 return await  commmonAPI("POST",`${SERVER_URL}/registration`,student,"")
}


//get details api
export const getallDetailAPI=async()=>{
    return await commmonAPI("GET",`${SERVER_URL}/dashboard`,"","")
}



