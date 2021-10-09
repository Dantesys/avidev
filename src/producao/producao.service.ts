import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../auth/user.entity';
import { Pedido } from '../pedidos/pedidos.model';
import { ProducaoRepository } from './producao.repository';

@Injectable()
export class ProducaoService {
    constructor(private producaoRepository:ProducaoRepository){}
    async list(id:number){
        return await this.producaoRepository.find({estado:3,id});
    }
    async listAdm(){
        return await this.producaoRepository.find({estado:3});
    }
    async producao(id:number,user:User){
        return await this.producaoRepository.producao(id,user);
    }
    async endproducao(id:number,user:User){
        const pedido:Pedido = await this.producaoRepository.findOne({id});
        if(pedido.producao.id==user.id){
            return await this.producaoRepository.endproducao(id,user);
        }else{
            throw new UnauthorizedException("Você não tem autorização para finalizar a produção do pedido");
        }
    }
}
