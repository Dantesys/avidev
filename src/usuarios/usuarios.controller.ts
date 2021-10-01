import { Controller } from '@nestjs/common';
import { Service } from './service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private UsuariosService:Service){

    }
}
