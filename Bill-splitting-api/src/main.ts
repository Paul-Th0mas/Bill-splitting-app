import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors: {
      origin: ['http://localhost:5173'],
    },
  });

  const config = new DocumentBuilder()
    .setTitle('Bill Spliting API')
    .setDescription('Bill Spliting API')
    .setVersion('0.1')
    .addTag('pre-Alpha')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // app.use(function (req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // });
  app.enableCors({
    origin: 'http://localhost:5173',
  });

  await app.listen(3000);
}
bootstrap();
