import axios from "axios";

const url = "/users/";

// Function to store user data in localStorage
const storeUserDataInLocalStorage = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

// Function to retrieve user data from localStorage
const getUserDataFromLocalStorage = () => {
  const userData = localStorage.getItem("user");
  return userData ? JSON.parse(userData) : null;
};

export const signUp = async (data) => {
  const res = await axios.post(url + "register", data)
    .then((res) => {
      return res;
    })
    .catch((err) => err.response);
  return res;
};

export const loginIn = async (data) => {
  const res = await axios.post(url + "login", data)
    .then((res) => {
      // Store user data in localStorage on successful login
      storeUserDataInLocalStorage(res.data);
      return res;
    })
    .catch((err) => err.response);
  return res;
};

// Function to clear user data from localStorage on logout
export const logout = () => {
  localStorage.removeItem("user");
};

// Export a function to get user data from localStorage
export const getUser = () => {
  return getUserDataFromLocalStorage();
};
