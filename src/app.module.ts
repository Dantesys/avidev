import { Module } from '@nestjs/common';
import { PedidosModule } from './pedidos/pedidos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProducaoModule } from './producao/producao.module';
import { EscalaModule } from './escala/escala.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "dantesys",
      password: "diegohotuios",
      database: "avdb",
      autoLoadEntities: true,
      synchronize: true
    }),
    PedidosModule,
    AuthModule,
    ProducaoModule,
    EscalaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
