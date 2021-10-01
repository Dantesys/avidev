import { Module } from '@nestjs/common';
import { ProducoesController } from './producoes.controller';

@Module({
  controllers: [ProducoesController]
})
export class ProducoesModule {}
