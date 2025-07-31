import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

const isProduction = process.env.NODE_ENV === 'production';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ...(isProduction ? { ignoreEnvFile: true } : 
        { envFilePath: `.env.${process.env.NODE_ENV || 'development'}` }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }