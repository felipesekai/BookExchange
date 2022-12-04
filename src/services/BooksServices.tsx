import {BooksModel} from "../utils/@Types";
import {api} from "./api";

export const postNewBook = (newBook: BooksModel): boolean => {
    let isSuccess = false;
    api.post(`books/v1`, newBook).then(r => {
        let data: BooksModel = r.data;
        window.alert(`Book as been inserted successfully with title ${data.title}`);
        isSuccess = true;
    }).catch(err => {
        window.alert(`error occurred at insert a new book: ${err.message}`);

    });
    return isSuccess
}