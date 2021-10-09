import { Injectable } from '@nestjs/common';
import { EscalaRepository } from './escala.repository';

@Injectable()
export class EscalaService {
    constructor(private escalaRepository:EscalaRepository){}
    async list(id:number){
        return await this.escalaRepository.list(id);
    }
    async listAdm(){
        return await this.escalaRepository.listAdm();
    }
    async add(id:number){
        return await this.escalaRepository.add(id);
    }
    async del(id:number){
        return await this.escalaRepository.del(id);
    }
}
