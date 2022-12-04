import {Modal} from "./Modal";
import {BooksModel, PostsModel} from '../utils/@Types';
import {FormNewBook} from "./FormNewBook";
import {useContext, useState} from "react";
import {FormNewPost} from "./FormNewPost";
import {formatDate} from "../utils/data-converter";
import {AuthContext} from "../context/AuthProvider";

interface Props {
    isOpen: boolean;
    onOpenChange: (b: boolean) => void;
}

export function DialogNewPost({ isOpen, onOpenChange }: Props) {
    const [isNewBook, setIsNewBook] = useState<boolean>(false);
    // @ts-ignore
    const {user} = useContext(AuthContext);

    const [post, setPost] = useState<PostsModel>({
        postCount: 0,
        date: formatDate(),
        bookID: {} as BooksModel,
        userID: user
    });


    return (
        <Modal title='Publique um Livro' isOpen={isOpen} handleOpenChange={onOpenChange}>
            {isNewBook ?
                <FormNewBook isOpen={isNewBook} onOpenChange={setIsNewBook} post={post} /> :
                <FormNewPost isOpen={isNewBook} onOpenChange={setIsNewBook} post={post} />
            }

        </Modal>
    );
}