import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { Service } from './service';

@Module({
  controllers: [UsuariosController],
  providers: [Service]
})
export class UsuariosModule {}
