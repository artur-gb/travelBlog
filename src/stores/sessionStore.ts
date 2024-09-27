import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { User } from "../entities/User";

export const useSessionStore = defineStore("session", () => {
  const getFromLocalStorage = (): User | undefined => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedData = JSON.parse(userData);
      return parsedData as User;
    }
    return undefined;
  };

  const user = ref<User | undefined>(getFromLocalStorage());
  const isAuthorized = computed(() => (user.value ? true : false));
  const setUser = (authUser: User | undefined) => {
    user.value = authUser;
    if (authUser) {
      localStorage.setItem("user", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("user");
    }
  };

  return { user, isAuthorized, setUser };
});
