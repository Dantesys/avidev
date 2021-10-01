import { Module } from '@nestjs/common';
import { PedidoModule } from './pedido/pedido.module';
import { ProducaoModule } from './producao/producao.module';
import { EscalaModule } from './escala/escala.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [PedidoModule, ProducaoModule, EscalaModule, UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
