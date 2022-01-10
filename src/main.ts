import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParse from 'body-parser';
async function bootstrap() {
  const cors_config={
    origin: "*",
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"] ,
    preflightContinue : false ,
    optionsSuccessStatus : 204 
  }
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe);
  app.use(bodyParse.json({limit:'50mb'}));
  app.use(bodyParse.urlencoded({limit:'50mb',extended:true}))
  app.enableCors(cors_config);
  await app.listen(3000,'localhost');
}
bootstrap();
