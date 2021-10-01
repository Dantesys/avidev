import { Controller } from '@nestjs/common';
import { Service } from './service';
@Controller('escalas')
export class EscalasController {
    constructor(private EscalasService:Service){

    }
}