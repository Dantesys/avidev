import { Pedido } from './pedidos.model';
import { User } from './../auth/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MakeDTO } from './dtos/makeDTO';
import { PedidosRepository } from './pedidos.repository';
import { AnalizarDTO } from './dtos/analizarDTO';

@Injectable()
export class PedidosService {
    constructor(private pedrepo:PedidosRepository){}
    async make(makeDTO:MakeDTO,user:User){
        return await this.pedrepo.makePedido(makeDTO,user);
    }
    async list(user:User){
        return await this.pedrepo.find({user});
    }
    async listAdm(user:User){
        return await this.pedrepo.find();
    }
    async analisar(id:number,user:User){
        return await this.pedrepo.analisar(id,user);
    }
    async analisado(id:number,analizarDTO:AnalizarDTO,user:User){
        const pedido:Pedido = await this.pedrepo.findOne({id});
        if(pedido.analizador.id==user.id){
            return await this.pedrepo.analisado(id,analizarDTO,user);
        }else{
            throw new UnauthorizedException("Você não tem autorização para finalizar a analisa do pedido");
        }
    }
}
