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
    async add(id:number,user:User){
        let p:Pedido = await this.findOne({id});
        if(p.estado==4){
            p.estado=5;
            p.escala=user;
            p.dti_escala=new Date();
            await this.save(p)
            return {success: true};
        }else{
            throw new ConflictException("Pedido não pode entrar escala de entrega");
        }
    }
    async del(id:number){
        let p:Pedido = await this.findOne({id});
        if(p.estado==5){
            p.estado=4;
            p.dtf_escala=new Date();
            await this.save(p)
            return {success: true};
        }else{
            throw new ConflictException("Pedido não sair da escala de entrega");
        }
    }
}