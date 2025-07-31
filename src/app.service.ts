import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(private configService: ConfigService){

  }
  getHello(): string {
   console.log("test", this.configService)
    const port = this.configService.get('environmentVar');
    const env=  this.configService.get('label');

    return `This app is running in ${env} environment on port ${port}`;
  }
}
