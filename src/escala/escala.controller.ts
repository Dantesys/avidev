import { EscalaService } from './escala.service';
import { Controller, Get, Param, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { getUser } from '../auth/get-user.dacorator';
import { User } from '../auth/user.entity';

@Controller('escala')
@UseGuards(AuthGuard('jwt'))
export class EscalaController {
    constructor(private escalaService:EscalaService){}
    @Get("/list")
    async list(@getUser() user:User){
        if(user.tp==2 || user.tp==1){
            return await this.escalaService.listAdm();
        }else if(user.tp==0){
            return await this.escalaService.list(user.id);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para adicionar na escala`);
        }
    }
    @Get("/add/:id")
    async add(@Param() param, @getUser() user:User){
        if(user.tp==2 || user.tp==1){
            return await this.escalaService.add(param.id);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para adicionar na escala`);
        }
    }
    @Get("/del/:id")
    async del(@Param() param, @getUser() user:User){
        if(user.tp==2 || user.tp==1){
            return await this.escalaService.del(param.id);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para remover da escala`);
        }
    }
}
