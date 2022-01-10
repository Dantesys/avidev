import { IsEmail, IsInt, IsNotEmpty, IsObject, IsString, Matches, MinLength } from "class-validator"

export class CriarDTO {
    @IsNotEmpty()
    @IsString()
    nome: string
    @MinLength(8, {
        message: 'A senha é muito curta. O minimo é $constraint1 characters',
    })
    @IsNotEmpty()
    @IsString()
    @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.=])[A-Za-z\d@$!%*?&.=]{8,}$/, {message: 'Senha é fraca, deve conter pelo menos:\n1 - Letra maiuscula\n1 - Letra minuscula\n1 - Numero\n1 - Caractere especial\nTer pelo menos 8 caracteres'})
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