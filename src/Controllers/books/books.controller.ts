/*
    Create controller via terminal
    nest g controller <controller_name>
*/


import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';

import { BookDTO } from '../../DTO/books.dto';
import { BooksService } from 'src/Services/books/books.service';

@Controller('books')
export class BooksController 
{

    constructor(
        private readonly bookService: BooksService
    ){}

    //Como é no typescript eu devo retornar 
    //Qual o tipo de retorno que minha função irá trazer
    @Get()
    async getAllBooks(): Promise<BookDTO[]>
    {
        return await this.bookService.getAllBooks();
    }

    /*
        Começando a validação das rotas instalando um plug-in
        
        npm i class-validator
        npm i class-transformer

        Validação em DTO/books
        
    */
    @Post()
    async saveBook(@Body() newBook: BookDTO): Promise<BookDTO>
    {
        return await this.bookService.saveBook(newBook);
    }

    @Patch()
    updateBook(): string
    {
        return 'Update';
    }

    @Delete()
    deleteBook(): string
    {
        return 'Delete';
    }
}
