import { Controller, Get } from '@nestjs/common';
import { Service } from './service';

@Controller('pedidos')
export class PedidosController {
    constructor(private PedigosService:Service){

    }
}
