import { User } from './user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CriarDTO } from './dtos/criarDTO';
import { ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ChangeDTO } from './dtos/changeDTO';
@EntityRepository(User)
export class UsersRepository extends Repository<User>{
    async createUser(criarDTO:CriarDTO){
        try {
            const {nome,senha,email,tp,endereco} = criarDTO;
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(senha,salt);
            const user = this.create({nome,senha:hash,email,tp,endereco});
            return await this.save(user)
        } catch (error) {
            if(error.code=='23050'){
                throw new ConflictException('Usuario já existente')
            }else{
                throw error
            }
        }
    } 
    async changeUser(changeDTO:ChangeDTO,user:User){
        try {
            const {nome,senha,endereco} = changeDTO;
            if(nome){
                user.nome = nome;
            }
            if(senha){
                const salt = await bcrypt.genSalt();
                const hash = await bcrypt.hash(senha,salt);
                user.senha = hash;
            }
            if(endereco){
                user.endereco = endereco
            }
            return await this.save(user)
        } catch (error) {
            if(error.code=='23050'){
                throw new ConflictException('Usuario já existente')
            }else{
                throw error
            }
        }
    }
}