import { Module } from '@nestjs/common';
import { BeModule } from '@myOrg/be';

import { AppController } from './app.controller';
import { AppService } from './app.service';



@Module({
  imports: [BeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
