import { User } from './../auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import { Pedido } from '../pedidos/pedidos.model';

@EntityRepository(Pedido)
export class ProducaoRepository extends Repository<Pedido>{
    async producao(id:number,user:User){
        let p:Pedido = await this.findOne({id});
        if(p.estado==2){
            p.estado=3;
            p.producao=user;
            p.dti_producao = new Date();
            await this.save(p)
            return {success: true};
        }else{
            throw new ConflictException("Pedido não pode entrar em produção");
        }
    }
    async endproducao(id:number,user:User){
        let p:Pedido = await this.findOne({id});
        if(p.estado==3){
            p.estado=4;
            p.dtf_producao= new Date();
            await this.save(p)
            return {success: true};
        }else{
            throw new ConflictException("Pedido não está na produção");
        }
    }
}