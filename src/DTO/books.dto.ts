import { IsNotEmpty, IsString, MinLength, MaxLength, IsNumber, IsPositive, IsArray, ArrayMinSize, IsNotEmptyObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AuthorDTO } from './author.dto';

export class BookDTO
{
    //Colocando o nome como obrigatorio

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly name: string;
    
    @IsNotEmpty()
    @Type(() => AuthorDTO) // Valida de acordo com o que foi feito no Author DTO
    @ArrayMinSize(1)
    @IsNotEmptyObject({each:true}) // Significa que nenhum obejto pode ser vazio
    @ValidateNested({each : true}) // Signfica que ele está validando também dentro do meu AuthorDTO
    readonly author: AuthorDTO[]; //Porque eu posso ter mais de autor
    
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly language: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly releaseYear: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly publisher: string;
    
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly pages: number;
}