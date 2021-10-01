import { Module } from '@nestjs/common';
import { EscalasController } from './escalas.controller';

@Module({
  controllers: [EscalasController]
})
export class EscalasModule {}
