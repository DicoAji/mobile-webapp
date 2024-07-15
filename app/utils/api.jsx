import axios from "axios";

const BASE_URL =
  "https://docs.google.com/spreadsheets/d/1Oahej8yuEHfDsQI-AwycEpQ0CnjkMsxOMg2ywMKnjsg/edit?gid=1538893505#gid=1538893505";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error.message);
    throw error;
  }
};

export const registerUser = async (email, username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      email,
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error registering:", error.message);
    throw error;
  }
};

export const fetchUserProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/profile`);
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error.message);
    throw error;
  }
};

export const updateProfile = async (profileData) => {
  try {
    const response = await axios.put(`${BASE_URL}/profile`, profileData);
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error.message);
    throw error;
  }
};
