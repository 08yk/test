
import { axiosGet, axiosPost, axiosPostJson } from "@/assets/js/axios";
export const getDatatest = data => axiosGet("zhiniu-server/dynamic/getAllCateLevelOne", data);
