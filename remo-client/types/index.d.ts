export type BarcodeResponse = {type: string, data: string};

export type StringSetter = {page: string, setPage: React.Dispatch<React.SetStateAction<string>>}

export type StringSet = {nextPage: React.Dispatch<React.SetStateAction<string>>}