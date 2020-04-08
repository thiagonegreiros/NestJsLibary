import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './Controllers/books/books.controller';

//Todos os meus controladores devem ser colocados aqui

@Module({
  imports: [
    MongooseModule.forRoot(
        'mongodb+srv://negreiros:negreiros@cluster0-3ekcc.mongodb.net/nestjs-libary?retryWrites=true&w=majority',
        { useNewUrlParse: true, useUnifiedTopology: true}
      )
  ],
  controllers: [BooksController],
  providers: [],
})
export class AppModule {}
