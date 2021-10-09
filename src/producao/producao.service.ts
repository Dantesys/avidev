import { Injectable } from '@nestjs/common';
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
    async producao(id:number){
        return await this.producaoRepository.producao(id);
    }
    async endproducao(id:number){
        return await this.producaoRepository.endproducao(id);
    }
}
