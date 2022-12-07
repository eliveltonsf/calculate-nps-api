import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  name: string | undefined;

  @Column()
  email: string | undefined;

  @CreateDateColumn()
  createdAt: string | undefined;
}
