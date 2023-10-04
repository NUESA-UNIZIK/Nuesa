import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import axios from "axios";

export const useAuthStore = create(
  devtools(
    immer((set) => ({
      isLoggedIn: [],
      isLoading: false,
      users: [],
      error: null,
      login: async ( user, password) => {
        try {
          const response = await axios.post(
            "http://localhost:8000/users/login",
            {user, password }
          );
          if (response) {
            set({
              isLoggedIn: true,
              error: null,
              isLoading: true,
              users: response.data,
            });
            localStorage.setItem("user", JSON.stringify(response.data));
          } else {
            const { error } = await response.json();
            set({ error });
          }
        } catch (error) {
          set({ isLoggedIn: false, error });
        }
      },

      signup: async (user) => {
        try {
          const response = await axios.post(
            "http://localhost:8000/users/register",
            { user}
          );
          if (response) {
            // const[isloggedin, setisloggedin]
            set({
              isLoggedIn: true,
              users: response.data,
              isLoading: true,
              error: null,
            });
            localStorage.setItem("user", JSON.stringify(response.data));
          } else {
            const { error } = await response.json();
            set({ error });
          }
        } catch (error) {
          set({ isLoggedIn: false, error: error.message });
        }
      },
      logout: () => {
        set({ users: null, isLoading: false, isLoggedIn: false });
        localStorage.removeItem("user");
      },
    }))
  )
);