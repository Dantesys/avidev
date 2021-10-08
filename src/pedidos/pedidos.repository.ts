import { User } from './../auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { MakeDTO } from './dtos/makeDTO';
import { Pedido } from './pedidos.model';
import { ConflictException, UnauthorizedException } from '@nestjs/common';

@EntityRepository(Pedido)
export class PedidosRepository extends Repository<Pedido>{
    async makePedido(makeDTO:MakeDTO,user:User){
        try {
            const {descricao} = makeDTO;
            let d:Date = new Date();
            let n:string = ""+d.getFullYear()+d.getMonth()+d.getDay()+d.getMilliseconds();
            const numero:number =+ n;
            const estado:number = 0;
            const pedido = this.create({numero,descricao,estado,user});
            return await this.save(pedido)
        } catch (error) {
            if(error.code=='23050'){
                throw new ConflictException('Pedido já existente')
            }else{
                throw error
            }
        }
    }
    async analisar(id:number,user:User){
        let p:Pedido = await this.findOne({id});
        if(p.estado==0){
            p.analizador = user;
            p.dti_analise = new Date();
            p.estado=1;
            await this.save(p)
            return p;
        }else{
            throw new UnauthorizedException("Pedido já entrou em analise");
        }
    }
    async escala(id:number){
        let p:Pedido = await this.findOne({id});
        if(p.estado==4){
            p.estado=5;
            await this.save(p)
            return p;
        }else{
            throw new UnauthorizedException("Pedido já entrou na escala de entrega");
        }
    }
    async delescala(id:number){
        let p:Pedido = await this.findOne({id});
        if(p.estado==5){
            p.estado=4;
            await this.save(p)
            return p;
        }else{
            throw new UnauthorizedException("Pedido não está escala de entrega");
        }
    }
    async producao(id:number){
        let p:Pedido = await this.findOne({id});
        if(p.estado==2){
            p.estado=3;
            await this.save(p)
            return p;
        }else{
            throw new UnauthorizedException("Pedido já entrou em producao");
        }
    }
    async endproducao(id:number){
        let p:Pedido = await this.findOne({id});
        if(p.estado==3){
            p.estado=4;
            await this.save(p)
            return p;
        }else{
            throw new UnauthorizedException("Pedido já saiu da producao");
        }
    }
    async analisado(id:number,user:User){
        let p:Pedido = await this.findOne({id});
        if(p.estado==1){
            p.dtf_analise = new Date();
            p.estado=2;
            await this.save(p)
            return p;
        }else{
            throw new UnauthorizedException("Pedido já foi analisado");
        }
    }
}