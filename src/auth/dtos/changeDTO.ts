import { IsEmail, IsInt, IsNotEmpty, IsObject, IsString, MinLength } from "class-validator"

export class ChangeDTO {
    @IsString()
    nome: string
    @MinLength(8, {
        message: 'A senha é muito curta. O minimo é $constraint1 characters',
    })
    @IsString()
    senha: string
    @IsObject()
    endereco: object
}