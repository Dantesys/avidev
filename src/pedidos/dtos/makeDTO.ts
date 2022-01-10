import { IsEmail, IsInt, IsNotEmpty, IsObject, IsString, MinLength } from "class-validator"

export class MakeDTO {
    @IsNotEmpty()
    @IsString()
    descricao: string
    @IsObject()
    projeto: object
}