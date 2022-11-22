export type BooksModel = {
    id?: number;
    title: string;
    author: string;
    publisher: string;
    imgURL: string;
    resume: string;
}
export type PostsModel = {
    id?: number;
    postCount: number,
    date: string,
    userID: {},
    bookID: BooksModel,
    bookInterests?: string,
}


export type UserModel = {
    id?: number;
    name: number,
    email: string,
    password: string,
}


