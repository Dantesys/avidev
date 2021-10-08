import { Pedido } from './pedidos.model';
import { User } from './../auth/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MakeDTO } from './dtos/makeDTO';
import { PedidosRepository } from './pedidos.repository';

@Injectable()
export class PedidosService {
    constructor(private pedrepo:PedidosRepository){}
    async make(makeDTO:MakeDTO,user:User){
        return await this.pedrepo.makePedido(makeDTO,user);
    }
    async list(user:User){
        return await this.pedrepo.find({user});
    }
    async listpd(){
        return await this.pedrepo.find({estado:3});
    }
    async listAdm(user:User){
        return await this.pedrepo.find();
    }
    async analisar(id:number,user:User){
        return await this.pedrepo.analisar(id,user);
    }
    async escala(id:number){
        return await this.pedrepo.escala(id);
    }
    async delescala(id:number){
        return await this.pedrepo.delescala(id);
    }
    async producao(id:number){
        return await this.pedrepo.producao(id);
    }
    async endproducao(id:number){
        return await this.pedrepo.endproducao(id);
    }
    async analisado(id:number,user:User){
        const pedido:Pedido = await this.pedrepo.findOne({id});
        if(pedido.analizador.id==user.id){
            return await this.pedrepo.analisado(id,user);
        }else{
            throw new UnauthorizedException("Você não tem autorização para finalizar a analisa do pedido");
        }
    }
}
