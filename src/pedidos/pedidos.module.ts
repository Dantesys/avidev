import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidosRepository } from './pedidos.repository';
import { PedidosService } from './pedidos.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([PedidosRepository]),
    AuthModule
  ],
  controllers: [PedidosController],
  providers: [PedidosService]
})
export class PedidosModule {}
