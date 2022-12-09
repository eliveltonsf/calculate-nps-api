import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';
import Survey from './Survey';

@Entity('surveys_users')
export default class Surveys {
  @PrimaryGeneratedColumn('uuid')
  readonly id?: string;

  @Column({ type: 'text', nullable: true })
  value?: string;

  @ManyToOne(() => User, (user) => user.id, { cascade: true, eager: true })
  public user?: User[] | string;

  @ManyToOne(() => Survey, (survey) => survey.id, { cascade: true, eager: true })
  public survey?: Survey[] | string;

  @CreateDateColumn()
  create_at?: Date;
}
