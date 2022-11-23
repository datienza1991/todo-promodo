import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { ProjectService } from './projects.service';

const projectArray: Project[] = [
  {
    id: 1,
    name: 'name1',
  },
  {
    id: 2,
    name: 'name1',
  },
];

const oneProject: Project = {
  id: 1,
  name: 'name1',
};

describe('ProjectsService', () => {
  let service: ProjectService;
  let repository: Repository<Project>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectService,
        {
          provide: getRepositoryToken(Project),
          useValue: {
            find: jest.fn().mockResolvedValue(projectArray),
            findOneBy: jest.fn().mockResolvedValue(oneProject),
            save: jest.fn().mockResolvedValue(oneProject),
            update: jest.fn().mockResolvedValue(oneProject),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
    repository = module.get<Repository<Project>>(getRepositoryToken(Project));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should successfully insert a project', () => {
      const oneProject: Project = {
        id: 1,
        name: 'name1',
      };

      expect(
        service.create({
          name: 'name1',
        })
      ).resolves.toEqual(oneProject);
    });
  });

  describe('update()', () => {
    it('should successfully update a project', () => {
      const oneProject: Project = {
        id: 1,
        name: 'name1',
      };

      expect(
        service.update(1, {
          name: 'name1',
        })
      ).resolves.toEqual(oneProject);
    });
  });

  describe('findAll()', () => {
    it('should return an array of projects', async () => {
      const projects = await service.findAll();
      expect(projects).toEqual(projectArray);
    });
  });

  describe('findOne()', () => {
    it('should get a single project', () => {
      const repoSpy = jest.spyOn(repository, 'findOneBy');
      expect(service.findOne(1)).resolves.toEqual(oneProject);
      expect(repoSpy).toBeCalledWith({ id: 1 });
    });
  });

  describe('remove()', () => {
    it('should call remove with the passed value', async () => {
      const removeSpy = jest.spyOn(repository, 'delete');
      const retVal = await service.remove(2);
      expect(removeSpy).toBeCalledWith(2);
      expect(retVal).toBeUndefined();
    });
  });
});
