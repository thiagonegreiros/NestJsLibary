import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class BookDTO
{
    //Colocando o nome como obrigatorio

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly name: string;
    readonly author: string[]; //Porque eu posso ter mais de autor
    readonly language: string;
    readonly releaseYear: number;
    readonly publisher: string;
    readonly pages: number;
}