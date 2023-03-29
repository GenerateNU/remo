import axios from "axios";
import { BookUser } from "../types";

import { API_URL } from "./api_links";

export const findBookBarcode = async (barcode: String) => {
  const response = await axios.get(`${API_URL}/v1/books/${barcode}`);
  return response.data;
};

export const checkoutBook = async ({ barcode, user }: BookUser) => {
  const response = await axios.put(
    `${API_URL}/v1/checkout_book/${barcode}/${user}`
  );
  return response.data;
};
