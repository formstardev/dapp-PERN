import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

const register = (username, email, password) => {
  return new Promise(function(resolve, reject) {
    axios.post(API_URL + "/register", {
      username,
      email,
      password,
    }).then(result => {
      resolve(result)
    }).catch(err => {
      reject(err)
    })
  })
};

const login = (email, password) => {
  return new Promise(function(resolve, reject) {
    axios
      .post(API_URL + "/login", {
        email,
        password,
      })
      .then((response) => {      
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        resolve(response.data); // Resolve with the response data
      })
      .catch((error) => {
        reject(error); // Reject with the error received from the API call
      });
  });
};


const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const verifyUser = (code) => {
  return axios.get(API_URL + "confirm/" + code).then((response) => {
    return response.data;
  });
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  verifyUser,
};
