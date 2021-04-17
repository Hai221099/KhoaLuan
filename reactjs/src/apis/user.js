import { instance } from "./index";

export const loginFactory = () => {
  const login = async (a) => {
    const response = await instance().post("/user", a);
    if (response.data) {
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("role", response.data.role);
    }

    return response.data;
  };

  return login;
};
