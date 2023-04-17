export type BarcodeResponse = {type: string, data: string};

export type StringSetter = {page: string, setPage: React.Dispatch<React.SetStateAction<string>>};

export type StringSet = {nextPage: React.Dispatch<React.SetStateAction<string>>};

export type Progress = {activeStep: number};

export type BookUser = {barcode: string, user: string};

export type Book = {
    isbn: string;
    title: string;
    author: string;
    coverUrl?: string;
  };