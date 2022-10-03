import { localApi } from "../api";
import axios from "axios";

const EmployeeDetails = async() => {
    const response = await axios.get(`${localApi}employeeDetails`)
    return response;
}

const Auth = {
    EmployeeDetails
}

export default Auth;