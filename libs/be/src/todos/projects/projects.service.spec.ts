import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let projectRepository: Repository<Project>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsService],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
    projectRepository = module.get<Repository<Project>>(Repository<Project>);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return array of projects', () => {
    const project: Project = { id: 1, name: 'project 1' };
    jest.spyOn(projectRepository,'target').mockImplementation(() => result);
    const projects = service.findAll();
    expect(projects).toContainEqual(project);
  });
});
