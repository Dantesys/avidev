import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { Service } from './service';

@Module({
  controllers: [PedidosController],
  providers: [Service]
})
export class PedidosModule {}
