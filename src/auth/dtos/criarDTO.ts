import { IsEmail, IsInt, IsNotEmpty, IsObject, IsString, MinLength } from "class-validator"

export class CriarDTO {
    @IsNotEmpty()
    @IsString()
    nome: string
    @MinLength(8, {
        message: 'A senha é muito curta. O minimo é $constraint1 characters',
    })
    @IsNotEmpty()
    @IsString()
    senha: string
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string
    @IsInt()
    @IsNotEmpty()
    tp: number
    /*
    0-Revendedora
    1-Funcionario
    2-Gerente
    */
    @IsNotEmpty()
    @IsObject()
    endereco: object
}