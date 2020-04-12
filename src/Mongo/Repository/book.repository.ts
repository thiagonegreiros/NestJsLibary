/*
    Camada reponsável por fazer a conexão com o banco de dados
*/

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Book } from "../Interfaces/book.interface";
import { BookDTO } from "src/DTO/books.dto";

@Injectable()
export class BookRepository
{
    constructor(
        @InjectModel('book') private readonly bookModel: Model<Book>
    ){}

    async saveBook(newBook: BookDTO): Promise<BookDTO>
    {
        const saveBook = this.bookModel(newBook);
        return await saveBook.save();
    }

    async getAllBooks(): Promise<BookDTO[]>
    {

        /*
            find{{<o que eu quero trazer>}, {o que eu nao quero trazer}}
        */

        const findAllBooks = this.bookModel;
        return await findAllBooks.find({}, {_v: false}).sort({name: +1}).exec();
    }
}