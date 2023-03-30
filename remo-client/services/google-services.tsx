import axios from "axios";

import { GBOOKS_API } from "./api_links";

export const findGoogleBook = async (barcode: string) => {
  const response = await axios.get(`${GBOOKS_API}${barcode}`);
  return response.data;
};
