import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';
import Survey from './Survey';

@Entity('surveys_users')
export default class Surveys {
  @PrimaryGeneratedColumn('uuid')
  readonly id?: string;

  @Column({ type: 'text', nullable: true })
  value?: string;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user?: User | string;

  @OneToOne(() => Survey, { cascade: true })
  @JoinColumn()
  survey?: Survey | string;

  @CreateDateColumn()
  create_at?: Date;
}
