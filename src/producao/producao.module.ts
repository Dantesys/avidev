import { ProducaoService } from './producao.service';
import { PedidosModule } from './../pedidos/pedidos.module';
import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { ProducaoController } from './producao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducaoRepository } from './producao.repository';

@Module({
  imports:[PedidosModule,AuthModule,TypeOrmModule.forFeature([ProducaoRepository])],
  controllers: [ProducaoController],
  providers: [ProducaoService]
})
export class ProducaoModule {}
