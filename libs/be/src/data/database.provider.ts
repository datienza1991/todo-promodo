import { DataSource } from 'typeorm';
import { Project } from '../todos/projects/entities/project.entity';
import { User } from '../users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'sqlite',
  database: 'todo-promodoro-db-new-2.db',
  entities: [User, Project],
  synchronize: true,
});
