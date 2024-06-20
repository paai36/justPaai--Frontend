import axios, { AxiosError } from "axios";

const instance = axios.create({
    baseURL: "https://justipaai.com/"
});

let tempReq: { url?: string | null; method?: string | null; data: any } = { url: null, method: null, data: undefined };

instance.interceptors.request.use(
    (config) => {
        if (!(config.url?.split("?")[0].replaceAll("/", "") === "userlogin")) {
            tempReq.url = config.url;
            tempReq.method = config.method;
            tempReq.data = config.data;
        }

        config.withCredentials = true;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
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

            const res = await instance.post(`/user/login/?firebase_id=${localStorage.getItem("uid")}`, {
                firebase_id: localStorage.getItem("uid"),
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