import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from './user.entity';
import { UsersRepository } from './users.repository';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(@InjectRepository(UsersRepository) private usersRepository: UsersRepository){
        super({secretOrKey: 'XPTO', jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()});
    }
    async validate(payload: {email:string}){
        const { email } = payload;
        const user:User = await this.usersRepository.findOne({email});
        if(!user){
            throw new UnauthorizedException("Usuario não encontrado");
        }
        return user;
    }
}