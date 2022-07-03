import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'todo-promodoro-db',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
  exports: [],
})
export class BeModule {}
