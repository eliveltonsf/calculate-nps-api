import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('surveys')
export class Surveys {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string | undefined;

  @Column({ type: 'text' })
  title: string | undefined;

  @Column({ type: 'text' })
  description: string | undefined;

  @CreateDateColumn()
  created_at?: Date;
}
