import { User } from './../auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import { Pedido } from '../pedidos/pedidos.model';

@EntityRepository(Pedido)
export class EscalaRepository extends Repository<Pedido>{
    async list(id:number){
        return await this.find({estado:5,id});
    }
    async listAdm(){
        return await this.find({estado:5});
    }
    async add(id:number){
        let p:Pedido = await this.findOne({id});
        if(p.estado==4){
            p.estado=5;
            await this.save(p)
            return p;
        }else{
            throw new ConflictException("Pedido já entrou na escala de entrega");
        }
    }
    async del(id:number){
        let p:Pedido = await this.findOne({id});
        if(p.estado==5){
            p.estado=4;
            await this.save(p)
            return p;
        }else{
            throw new ConflictException("Pedido não está escala de entrega");
        }
    }
}