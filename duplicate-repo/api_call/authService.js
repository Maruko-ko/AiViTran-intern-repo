import axiosInstance from "./axiousInstance";
// example function to call login API
export const login = async (username, password, signal) => {
    return axiosInstance.post(
        '/auth/login', 
        { username, password },
        { signal }
    );
};
// logout function to call logout API
export const logout = async () => {
    return axiosInstance.post(
        '/auth/logout', 
        {},
        {signal}
    );
};