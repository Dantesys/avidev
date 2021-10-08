import { Module } from '@nestjs/common';
import { PedidosModule } from './pedidos/pedidos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
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
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
