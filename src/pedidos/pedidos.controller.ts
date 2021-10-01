import { Controller, Get } from '@nestjs/common';

@Controller('pedidos')
export class PedidosController {
    @Get()
    getPedido(){
        return "Pedidos";
    }
}
