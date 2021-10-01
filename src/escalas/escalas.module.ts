import { Module } from '@nestjs/common';
import { EscalasController } from './escalas.controller';
import { Service } from './service';

@Module({
  controllers: [EscalasController],
  providers: [Service]
})
export class EscalasModule {}
