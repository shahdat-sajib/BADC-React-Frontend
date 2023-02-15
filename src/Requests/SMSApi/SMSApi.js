// import { localApi } from "../api";
import { WebApi } from "../api";
import axios from "axios";

const SMSApi = async(apikey, msg, to) => {
    const response = await axios.post(`${WebApi}sendsms?api_key=${apikey}&msg=${msg}&to=${to}`)
    return response;
}

const Auth = {
    SMSApi
}

export default Auth;