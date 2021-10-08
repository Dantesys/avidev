import { IsEmail, IsInt, IsNotEmpty, IsObject, IsString, MinLength } from "class-validator"

export class LoginDTO {
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
}