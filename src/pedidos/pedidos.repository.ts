import { User } from './../auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { MakeDTO } from './dtos/makeDTO';
import { Pedido } from './pedidos.model';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import { AnalizarDTO } from './dtos/analizarDTO';

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
            await this.save(pedido);
            return {success: true};
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
            return await this.save(p);
        }else{
            throw new UnauthorizedException("Pedido já entrou em analise");
        }
    }
    async analisado(id:number,analizarDTO:AnalizarDTO,user:User){
        const { preco } = analizarDTO;
        let p:Pedido = await this.findOne({id});
        if(p.estado==1){
            p.dtf_analise = new Date();
            p.estado=2;
            p.preco = preco
            await this.save(p)
            return {success: true};
        }else{
            throw new UnauthorizedException("Pedido já foi analisado");
        }
    }
}