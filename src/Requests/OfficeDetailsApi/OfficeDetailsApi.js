// import { localApi } from "../api";
import axios from "axios";

const OfficeDetails = async() => {
    const response = await axios.get(`${localApi}offices`)
    return response;
}

const Auth = {
    OfficeDetails
}

export default Auth;