import { User } from './../auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import { Pedido } from '../pedidos/pedidos.model';

@EntityRepository(Pedido)
export class ProducaoRepository extends Repository<Pedido>{
    async producao(id:number){
        let p:Pedido = await this.findOne({id});
        if(p.estado==2){
            p.estado=3;
            await this.save(p)
            return p;
        }else{
            throw new ConflictException("Pedido já entrou em producao");
        }
    }
    async endproducao(id:number){
        let p:Pedido = await this.findOne({id});
        if(p.estado==3){
            p.estado=4;
            await this.save(p)
            return p;
        }else{
            throw new ConflictException("Pedido já saiu da producao");
        }
    }
}