import * as Dialog from "@radix-ui/react-dialog";
import { Modal } from "./Modal";
import { BooksModel, PostsModel } from '../utils/Types';
import { LabelInput } from "./LabelInput";
import { FormNewBook } from "./FormNewBook";
import { useCallback, useEffect, useState } from "react";
import { FormNewPost } from "./FormNewPost";
import { api } from "../services/api";
import { formatDate } from "../utils/data-converter";
interface Props {
    isOpen: boolean;
    onOpenChange: (b: boolean) => void;
}

export function DialogNewPost({ isOpen, onOpenChange }: Props) {
    const [isNewBook, setIsNewBook] = useState<boolean>(false);
    const [post, setPost] = useState<PostsModel>({
        postCount: 0,
        date: formatDate(),
        bookID: {} as BooksModel,
        userID: {
            id: 1,
            name: "sekai",
            email: "teste@teste.com",
            password: ""
        }
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