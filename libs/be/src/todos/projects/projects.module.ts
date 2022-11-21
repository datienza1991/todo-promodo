import { Module } from '@nestjs/common';
import { ProjectService } from './projects.service';
import { ProjectsController } from './projects.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [ProjectService],
})
export class ProjectsModule {}
