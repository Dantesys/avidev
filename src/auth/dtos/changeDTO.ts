import { IsEmail, IsInt, IsNotEmpty, IsObject, IsString, MinLength } from "class-validator"

export class ChangeDTO {
    @IsString()
    nome: string
    @IsString()
    senha: string
    @IsObject()
    endereco: object
}