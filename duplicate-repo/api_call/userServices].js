import axios from "axios";

export const getUserProfile = async (signal) => {
    return axios.get(
        "/user/profile",
        { signal });
};