import { Controller } from '@nestjs/common';
import { Service } from './service';

@Controller('producoes')
export class ProducoesController {
    constructor(private PorducoesService:Service){

    }
}
