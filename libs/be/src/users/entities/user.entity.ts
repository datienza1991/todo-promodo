import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Todo: Add annotations for type orm
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
