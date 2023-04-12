package graph

import "remo/backend/graph/model"

// Trying to write for this endpoint in book-services.tsx:
// export const returnBook = async (barcode: String) => {
// 	const bcode = barcode["barcode"];

// 	const response = await axios.put(
// 	  `${API_URL}/v1/return/${bcode}`
// 	);
// 	console.log("barcode; ", barcode);
// 	console.log("the response is ------");
// 	console.log(response);
// 	return response.data;
//   };

// Function attempting to model the above functionality.
func returnBook(barcode string) (model.Book, error) {

	// parse barcode for ISBN_13

	// query remoDB

	var mtBook *model.Book
	return *mtBook, err

	// assign values from resolver query to
}
