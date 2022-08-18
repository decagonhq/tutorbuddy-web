import axios from "axios";

const BASE_URL = "http://tutorbuddy-api-lb-382893429.us-east-2.elb.amazonaws.com/api/v1"

export default axios.create({
    baseURL: BASE_URL,
})