import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { DatabaseModule } from '../../data/database.module';
import { projectProviders } from './project.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProjectsController],
  providers: [...projectProviders, ProjectsService],
})
export class ProjectsModule {}
