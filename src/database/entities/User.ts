import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string | undefined;

  @Column({ type: 'text' })
  name: string | undefined;

  @Column({ type: 'text' })
  email: string | undefined;

  @CreateDateColumn()
  created_at?: Date;
}
