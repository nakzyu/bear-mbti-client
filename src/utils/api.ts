import axios from "axios";
import { Result } from "../types/result";

const resultRoute = "/result";

const getUrl = () => process.env.NEXT_PUBLIC_SERVER_URL;

export const getResult = async () => {
  const res = await axios.get(getUrl() + resultRoute);
};
export const postResult = async (result: Result) => {
  axios.post(getUrl() + resultRoute, result);

  return;
};
