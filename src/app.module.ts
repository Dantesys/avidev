import { Module } from '@nestjs/common';
import { PedidosModule } from './pedidos/pedidos.module';
import { EscalasModule } from './escalas/escalas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProducoesModule } from './producoes/producoes.module';

@Module({
  imports: [PedidosModule, EscalasModule, UsuariosModule, ProducoesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
