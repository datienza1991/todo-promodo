import { Test, TestingModule } from '@nestjs/testing';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsController } from './projects.controller';
import { ProjectService } from './projects.service';

const createProjectDto: CreateProjectDto = {
  name: 'name',
};

describe('ProjectsController', () => {
  let controller: ProjectsController;
  let projectService: ProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [
        ProjectService,
        {
          provide: ProjectService,
          useValue: {
            create: jest
              .fn()
              .mockImplementation((project: CreateProjectDto) =>
                Promise.resolve({ id: 1, ...project })
              ),
            findAll: jest.fn().mockResolvedValue([
              {
                name: 'name1',
              },
              {
                name: 'name2',
              },
            ]),
            findOne: jest.fn().mockImplementation((id: string) =>
              Promise.resolve({
                name: 'name1',
                id
              })
            ),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ProjectsController>(ProjectsController);
  projectService = module.get<ProjectService>(ProjectService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('should create a project', () => {
      controller.create(createProjectDto);
      expect(controller.create(createProjectDto)).resolves.toEqual({
        id: 1,
        ...createProjectDto,
      });
      expect(projectService.create).toHaveBeenCalledWith(createProjectDto);
    });
  });

  describe('findAll()', () => {
    it('should find all projects ', () => {
      controller.findAll();
      expect(projectService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne()', () => {
    it('should find a project', () => {
      expect(controller.findOne('1')).resolves.toEqual({
        name: 'name1',
        id: 1,
      });
      expect(projectService.findOne).toHaveBeenCalled();
    });
  });

  describe('remove()', () => {
    it('should remove the project', () => {
      controller.remove('1');
      expect(projectService.remove).toHaveBeenCalled();
    });
  });

});
