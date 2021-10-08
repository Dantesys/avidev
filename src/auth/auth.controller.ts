import { User } from './user.entity';
import { LoginDTO } from './dtos/loginDTO';
import { Body, Controller, Post, UseGuards, UnauthorizedException, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CriarDTO } from './dtos/criarDTO'
import { AuthGuard } from '@nestjs/passport';
import { getUser } from './get-user.dacorator';
import { ChangeDTO } from './dtos/changeDTO';
@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    @Post("/cadastro")
    async cadastro(@Body() criarDTO:CriarDTO){
        criarDTO.tp=0;
        return this.authService.cadastro(criarDTO);
    }
    @Post("/funcionario/cadastro")
    @UseGuards(AuthGuard('jwt'))
    async cadastroFunc(@Body() criarDTO:CriarDTO,@getUser() user:User){
        if(user.tp==2){
            criarDTO.tp=1;
            return this.authService.cadastro(criarDTO);
        }else{
            throw new UnauthorizedException(`${user.nome} não tem permissão para cadastras funcionários`);
        }
    }
    @Post("/login")
    async login(@Body() loginDTO:LoginDTO) : Promise<{accessToken: string}>{
        return this.authService.login(loginDTO);
    }
    @Post("/edit")
    @UseGuards(AuthGuard('jwt'))
    async edit(@Body() changeDTO:ChangeDTO,@getUser() user:User){
        return this.authService.edit(changeDTO,user);
    }
    @Post("/del/:id")
    async delUser(@Param() param, @getUser() user:User){
        return this.authService.delUser(param.id,user);
    }
}
