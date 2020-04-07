/*
    Create controller via terminal
    nest g controller <controller_name>
*/


import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';

import { BookDTO } from '../../DTO/books.dto';

@Controller('books')
export class BooksController 
{

    //Como é no typescript eu devo retornar 
    //Qual o tipo de retorno que minha função irá trazer
    @Get()
    getAllBooks(): string
    {
        return 'All books!';
    }

    /*
        Começando a validação das rotas instalando um plug-in
        
        npm i class-validator
        npm i class-transformer

        Validação em DTO/books
        
    */
    @Post()
    saveBook(@Body() newBook: BookDTO): BookDTO
    {
        return newBook;
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
