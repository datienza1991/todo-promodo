import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from '../../todos/projects/projects.module';
import { CreateProjectDto } from '../../todos/projects/dto/create-project.dto';
import { Project } from '../../todos/projects/entities/project.entity';

describe('projects - /projects (e2e)', () => {
  const projects = {
    id: 1,
    name: 'name1'
  };

  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: 'todo-promodoro-test-db',
          entities: [Project],
          synchronize: true,
        }),
        ProjectsModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Create [POST /projects]', () => {
    return request(app.getHttpServer())
      .post('/projects')
      .send(projects as CreateProjectDto)
      .expect(201)
      .then(({ body }) => {
        expect(body).toEqual(projects);
      });
  });

  it('Get all projects [GET /projects]', () => {
    return request(app.getHttpServer())
      .get('/projects')
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeDefined();
      });
  });

  it('Get one project [GET /projects/:id]', () => {
    return request(app.getHttpServer())
      .get('/projects/2')
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeDefined();
      });
  });

  it('Delete one project [DELETE /projects/:id]', () => {
    return request(app.getHttpServer()).delete('/projects/1').expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});