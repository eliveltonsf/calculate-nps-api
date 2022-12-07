import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'text' })
  name: string | undefined;

  @Column({ type: 'text' })
  email: string | undefined;

  @CreateDateColumn()
  createdAt: string | undefined;
}
