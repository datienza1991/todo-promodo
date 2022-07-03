import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
<<<<<<< HEAD
import { Project } from '../todos/projects/entities/project.entity';
=======
>>>>>>> 8cba84416192122ccd2438ac30b8adb1b02f22d0
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'todo-promodoro-db',
<<<<<<< HEAD
      entities: [User,Project],
=======
      entities: [User],
>>>>>>> 8cba84416192122ccd2438ac30b8adb1b02f22d0
      synchronize: true,
    }),
    UsersModule,
  ],
  exports: [],
})
export class BeModule {}
