// utils/auth.js

import { getUserDataFromLocalStorage } from "../service/registerService";



export const useAuth = () => {
  const user = getUserDataFromLocalStorage();

  return {
    user,
    isAuthenticated: !!user,
  };
};
