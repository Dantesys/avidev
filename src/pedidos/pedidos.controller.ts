import { AuthGuard } from '@nestjs/passport';
import { Body, Controller, Get, Param, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { MakeDTO } from './dtos/makeDTO';
import { getUser } from '../auth/get-user.dacorator';
import { User } from '../auth/user.entity';
import { AnalizarDTO } from './dtos/analizarDTO';

@Controller('pedidos')
@UseGuards(AuthGuard('jwt'))
export class PedidosController {
    constructor(private PedigosService:PedidosService){
    }
    @Post("/fazer")
    async make(@Body() makeDTO:MakeDTO,@getUser() user:User){
        if(user.tp==0){
            return await this.PedigosService.make(makeDTO,user);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão`);
        }
    }
    @Get("/list")
    async list(@getUser() user:User){
        if(user.tp==0){
            return await this.PedigosService.list(user);
        }else if(user.tp==1 || user.tp==2){
            return await this.PedigosService.listAdm(user);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão`);
        }
    }
    @Get("/analisar/:id")
    async analisar(@Param() param, @getUser() user:User){
        if(user.tp==2 || user.tp==1){
            return await this.PedigosService.analisar(param.id,user);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para fazer analisar`);
        }
    }
    @Post("/analisar/:id/fim")
    async analisado(@Param() param,@Body() analizarDTO:AnalizarDTO,@getUser() user:User){
        if(user.tp==2 || user.tp==1){
            return await this.PedigosService.analisado(param.id,analizarDTO,user);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para fazer analisar`);
        }
    }
}
