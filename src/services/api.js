import axios from "axios";

// url: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// key: euvql4khtokVFQr78Cnf6bInZyEMfR1igp4aIDex
// /planetary/apod?api_key=euvql4khtokVFQr78Cnf6bInZyEMfR1igp4aIDex

const api = axios.create({
    baseURL: "https://api.nasa.gov/"
})

export default api;
