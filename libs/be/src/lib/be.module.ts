import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Project } from '../todos/projects/entities/project.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'todo-promodoro-db',
      entities: [User,Project],
      synchronize: true,
    }),
    UsersModule,
  ],
  exports: [],
})
export class BeModule {}
