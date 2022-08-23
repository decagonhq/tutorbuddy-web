import axios from "./axios";

export const loginUser = async (data) => {
  try {
    const response = await axios.post("/Auth/login", JSON.stringify(data));
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const forgotPassword = async (password) => {
  try {
    const response = await axios.post(
      "/Auth/forgot-password",
      JSON.stringify(password)
    );
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
