import { Module } from '@nestjs/common';
import { PedidosModule } from './pedidos/pedidos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "ec2-54-208-96-16.compute-1.amazonaws.com",
      port: 5432,
      username: "wdvdxtvrsrsggp",
      password: "d5fa886af6af30b7a725b71a3f8ed658c1648a0f2209be6e118ebf83646cc2e5",
      database: "d59soei61um0s9",
      autoLoadEntities: true,
      synchronize: true
    }),
    PedidosModule,
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
