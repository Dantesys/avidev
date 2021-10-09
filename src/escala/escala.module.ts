import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { PedidosModule } from '../pedidos/pedidos.module';
import { EscalaController } from './escala.controller';
import { EscalaRepository } from './escala.repository';
import { EscalaService } from './escala.service';

@Module({
  imports: [PedidosModule,AuthModule,TypeOrmModule.forFeature([EscalaRepository])],
  controllers: [EscalaController],
  providers: [EscalaService]
})
export class EscalaModule {}
