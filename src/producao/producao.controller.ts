import { Controller, Get, Param, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.entity';
import { getUser } from '../auth/get-user.dacorator';
import { ProducaoService } from './producao.service';

@Controller('producao')
@UseGuards(AuthGuard('jwt'))
export class ProducaoController {
    constructor(private producaoService:ProducaoService){}
    @Get("/list")
    async list(@getUser() user:User){
        if(user.tp==2 || user.tp==1){
            return await this.producaoService.listAdm();
        }else if(user.tp==0){
            return await this.producaoService.list(user.id);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para adicionar na escala`);
        }
    }
    @Get("/start/:id")
    async producao(@Param() param, @getUser() user:User){
        if(user.tp==2 || user.tp==1){
            return await this.producaoService.producao(param.id,user);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para enviar para producao`);
        }
    }
    @Get("/stop/:id")
    async endproducao(@Param() param, @getUser() user:User){
        if(user.tp==2 || user.tp==1){
            return await this.producaoService.endproducao(param.id,user);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para retirar da producao`);
        }
    }
}
