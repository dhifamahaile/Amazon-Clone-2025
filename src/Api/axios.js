import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  baseURL: "http://127.0.0.1:5001/e-clone-2025-c3570/us-central1/api",

  // deployed version of firebase function
  //   baseURL: "https://amazon-backend-9xop.onrender.com",
});

export { axiosInstance };
