import { User } from './../auth/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EscalaRepository } from './escala.repository';
import { Pedido } from '../pedidos/pedidos.model';

@Injectable()
export class EscalaService {
    constructor(private escalaRepository:EscalaRepository){}
    async list(id:number){
        return await this.escalaRepository.list(id);
    }
    async listAdm(){
        return await this.escalaRepository.listAdm();
    }
    async add(id:number,user:User){
        return await this.escalaRepository.add(id,user);
    }
    async del(id:number,user:User){
        const pedido:Pedido = await this.escalaRepository.findOne({id});
        if(pedido.escala.id==user.id){
            return await this.escalaRepository.del(id);
        }else{
            throw new UnauthorizedException("Você não tem autorização para finalizar a produção do pedido");
        }
    }
}
