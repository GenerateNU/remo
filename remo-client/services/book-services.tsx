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
  console.log("barcode; ", barcode, " user; ", user);
  console.log("the response is ------");
  console.log(response);
  return response.data;
};

export const findUserBooks = async (id: string) => {
  const response = await axios.get(`${API_URL}/v1/user_books/${id}`);
  return response.data;
};

export const findAllBooks = async () => {
  const response = await axios.get(`${API_URL}/v1/all_books`);
  return response.data;
};
