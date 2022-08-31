import axios from "./axios";

export const loginUser = async (data) => {
  try {
    const response = await axios.post("/Auth/login", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      JSON.stringify(password),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const imageUpload = async (id, formData) => {
  const token = localStorage.getItem("userToken");
  const user = JSON.parse(token);
  console.log(user)
  try {
    const response = await axios.patch(`/User/${id}/upload-image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
