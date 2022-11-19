import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { DatabaseModule } from '../../data/database.module';
import { projectProviders } from './project.providers';

@Module({
  imports: [DatabaseModule],
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
>>>>>>> Stashed changes
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
>>>>>>> Stashed changes
  controllers: [ProjectsController],
  providers: [...projectProviders, ProjectsService],
})
export class ProjectsModule {}
