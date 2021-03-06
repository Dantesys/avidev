import { CriarDTO } from './dtos/criarDTO';
import { UsersRepository } from './users.repository';
import { Injectable, UnauthorizedException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDTO } from './dtos/loginDTO';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ChangeDTO } from './dtos/changeDTO';
import { User } from './user.entity';
@Injectable()
export class AuthService implements OnModuleInit{
    constructor(
        @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
        private jwtService: JwtService
    ){}
    async onModuleInit(){
        const gerente = await this.usersRepository.findOne({email:"gerente@avidev.com"});
        if(!gerente){
            const criarDTO = {
                nome: "Gerente",
                senha: "G3r3nc1a@",
                email: "gerente@avidev.com",
                tp: 3,
                endereco: {}
            }
            await this.usersRepository.createUser(criarDTO);
        }
    }
    async cadastro(criarDTO:CriarDTO){
        return await this.usersRepository.createUser(criarDTO);
    }
    async edit(changeDTO:ChangeDTO,user:User){
        return await this.usersRepository.changeUser(changeDTO,user);
    }
    async login(loginDTO:LoginDTO) : Promise<{accessToken: string,user:User}>{
        const {email,senha} = loginDTO;
        const user = await this.usersRepository.findOne({email});
        if(user && (await bcrypt.compare(senha,user.senha))){
            const payload = {email};
            const accessToken: string = this.jwtService.sign(payload);
            return {accessToken,user};
        }else{
            throw new UnauthorizedException("Não autorizado");
        }
    }
    async delUser(id:number,user:User){
        if(user.tp==2){
            const func:User = await this.usersRepository.findOne({id});
            if(func.tp==1){
                return await this.usersRepository.delete({id});
            }else{
                throw new UnauthorizedException(`${user.nome} não tem permissão para remover usuarios do tipo revendedora`)
            }
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para remover usuarios`)
        }
    }
}