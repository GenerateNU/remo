import axios from "axios";
import { BookUser, Book } from "../types";

import { API_URL } from "./api_links";
import { findGoogleBook } from "./google-services";

export const findBookBarcode = async (barcode: String) => {
  const response = await axios.get(`${API_URL}/v1/books/${barcode}`);
  return response.data;
};

export const checkoutBook = async ({ barcode, user }: BookUser) => {
  const response = await axios.post(
    `${API_URL}/v1/checkout_book/${barcode}/${user}`
  );
  console.log("barcode; ", barcode, " user; ", user);
  console.log("the response is ------");
  console.log(response);
  return response.data;
};

export const returnBook = async ({ barcode, user }: BookUser) => {
  const response = await axios.post(
    `${API_URL}/v1/return/${barcode}/${user}`
  );
  console.log("barcode; ", barcode);
  console.log("the response is ------");
  console.log(response);
  return response.data;
};

export const findUserBooks = async (id: string) => {
  const response = await axios.get(`${API_URL}/v1/user_books/${id}`);

  const updatedBooks = await Promise.all(response.data.map(async (bookData) => {

    const coverResponse = await findGoogleBook(bookData.isbn_13);
    const obj = coverResponse.items[0].volumeInfo;
    const imageLinks = obj.imageLinks;
    const arr = Object.entries(imageLinks);
    const coverImage = arr[arr.length - 1][1];
    return { ...bookData, coverImage };
  }));
  console.log(updatedBooks);
  return updatedBooks;
};

export const findAllBooks = async () => {
  const response = await axios.get(`${API_URL}/v1/all_books`);

  return response.data;
};
