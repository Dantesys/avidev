import { AuthGuard } from '@nestjs/passport';
import { Body, Controller, Get, Param, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { MakeDTO } from './dtos/makeDTO';
import { getUser } from '../auth/get-user.dacorator';
import { User } from '../auth/user.entity';

@Controller('pedidos')
@UseGuards(AuthGuard('jwt'))
export class PedidosController {
    constructor(private PedigosService:PedidosService){

    }
    @Post("/fazer")
    async make(@Body() makeDTO:MakeDTO,@getUser() user:User){
        if(user.tp==0){
            return this.PedigosService.make(makeDTO,user);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão`);
        }
    }
    @Get("/list")
    async list(@getUser() user:User){
        if(user.tp==0){
            return this.PedigosService.list(user);
        }else if(user.tp==1 || user.tp==2){
            return this.PedigosService.listAdm(user);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão`);
        }
    }
    @Get("/list/producao")
    async listpd(){
        return this.PedigosService.listpd();
    }
    @Get("/analisar/:id")
    async analisar(@Param() param, @getUser() user:User){
        if(user.tp==2 || user.tp==1){
            return this.PedigosService.analisar(param.id,user);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para fazer analisar`);
        }
    }
    @Get("/escala/add/:id")
    async escala(@Param() param, @getUser() user:User){
        if(user.tp==2 || user.tp==1){
            return this.PedigosService.escala(param.id);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para adicionar na escala`);
        }
    }
    @Get("/escala/rm/:id")
    async delescala(@Param() param, @getUser() user:User){
        if(user.tp==2 || user.tp==1){
            return this.PedigosService.delescala(param.id);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para adicionar na escala`);
        }
    }
    @Get("/analisar/fim/:id")
    async analisado(@Param() param, @getUser() user:User){
        if(user.tp==2 || user.tp==1){
            return this.PedigosService.analisado(param.id,user);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para fazer analisar`);
        }
    }
    @Get("/producao/:id")
    async producao(@Param() param, @getUser() user:User){
        if(user.tp==2 || user.tp==1){
            return this.PedigosService.producao(param.id);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para enviar para producao`);
        }
    }
    @Get("/producao/fim/:id")
    async endproducao(@Param() param, @getUser() user:User){
        if(user.tp==2 || user.tp==1){
            return this.PedigosService.endproducao(param.id);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para retirar da producao`);
        }
    }
}
