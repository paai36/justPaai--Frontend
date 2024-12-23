import axios, { AxiosError } from "axios";

const instance = axios.create({
    baseURL: "http://16.171.39.76/api/v1",
    headers: {
        "Content-Type": "application/json", // Default header
    },
});

let tempReq: { url?: string | null; method?: string | null; data: any } = { url: null, method: null, data: undefined };

instance.interceptors.request.use(
    (config) => {
        // Exclude the login API from adding the Authorization header
        const isLoginRoute = config.url?.split("?")[0].replaceAll("/", "") === "userlogin";

        if (!isLoginRoute) {
            const token = localStorage.getItem("access_token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        // Store the request details for retry in case of token expiration
        if (!isLoginRoute) {
            tempReq.url = config.url;
            tempReq.method = config.method;
            tempReq.data = config.data;
        }

        config.withCredentials = true; // Ensure cookies (if any) are sent with requests
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error: AxiosError<any>) => {
        if (error.response?.status === 401) {
            // localStorage.removeItem("token");

            if (!localStorage.getItem("uid")) {
                return Promise.reject(error);
            }

            const res = await instance.post(`/user/login/`, {
                id_token: localStorage.getItem("access_token"),
            });

            if (res.status === 200) {
                localStorage.setItem("token", res.data.access);

                if (tempReq.method && tempReq.url) {
                    //@ts-ignore
                    const originalRes = instance[tempReq.method](tempReq.url, tempReq.data);
                    return originalRes;
                }
            }
        } 
        return Promise.reject(error);
    },
);

export default instance;
