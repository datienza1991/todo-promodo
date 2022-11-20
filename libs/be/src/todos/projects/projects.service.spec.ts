import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { ProjectService } from './projects.service';

const projectArray : Project[] = [
  {
    id: 1,
    name: "name1"
  },
  {
    id: 2,
    name: "name1"
  },
];

const oneUser:  Project = {
  id: 1,
  name: "name1"
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
            findOneBy: jest.fn().mockResolvedValue(oneUser),
            // save: jest.fn().mockResolvedValue(oneUser),
            // remove: jest.fn(),
            // delete: jest.fn(),
          },
        }
      ],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
    repository = module.get<Repository<Project>>(getRepositoryToken(Project));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll()', () => {
    it('should return an array of users', async () => {
      const users = await service.findAll();
      expect(users).toEqual(projectArray);
    });
  });

  describe('findOne()', () => {
    it('should get a single user', () => {
      const repoSpy = jest.spyOn(repository, 'findOneBy');
      expect(service.findOne(1)).resolves.toEqual(oneUser);
      expect(repoSpy).toBeCalledWith({ id: 1 });
    });
  });
});
