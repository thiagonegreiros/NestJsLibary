import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './Controllers/books/books.controller';
import { BooksService } from './Services/books/books.service';
import { BookSchema } from './Mongo/Schemas/book.schema';
import { AuthorSchema } from './Mongo/Schemas/author.schema';
import { BookRepository } from './Mongo/Repository/book.repository';

//Todos os meus controladores devem ser colocados aqui

@Module({
  imports: [
    MongooseModule.forRoot(
        'mongodb+srv://negreiros:negreiros@cluster0-3ekcc.mongodb.net/nestjs-libary?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true}
      ),

    MongooseModule.forFeature([
        { name: 'book', schema: BookSchema }
      ])
  ],
  controllers: [BooksController],
  providers: [BooksService, BookRepository],
})
export class AppModule {}
