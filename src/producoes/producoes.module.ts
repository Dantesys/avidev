import { Module } from '@nestjs/common';
import { ProducoesController } from './producoes.controller';
import { Service } from './service';

@Module({
  controllers: [ProducoesController],
  providers: [Service]
})
export class ProducoesModule {}
