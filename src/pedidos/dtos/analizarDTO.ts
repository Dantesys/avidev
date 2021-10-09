import { IsCurrency, IsEmail, IsInt, IsNotEmpty, IsObject, IsString, MinLength } from "class-validator"

export class AnalizarDTO {
    @IsNotEmpty()
    @IsCurrency()
    preco: number
}