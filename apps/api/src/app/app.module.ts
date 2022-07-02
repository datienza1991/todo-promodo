import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BeModule } from '@todos/be';

@Module({
  imports: [BeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
