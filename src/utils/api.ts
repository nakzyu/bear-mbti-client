import axios from "axios";
import { Freqs } from "../types/freqs";
import { Result } from "../types/result";

const resultRoute = "/result";

const getUrl = () => process.env.NEXT_PUBLIC_SERVER_URL;

export const getResult = async () => {
  try {
    const res = await axios.get(getUrl() + resultRoute);
    const freqs = res.data as Freqs;
    return freqs;
  } catch (e) {
    console.error(e);
  }
};
export const postResult = async (result: Result) => {
  try {
    const res = await axios.post(getUrl() + resultRoute, result);
    const id = res.data as string;
    return id;
  } catch (e) {
    console.error(e);
    return;
  }
};
