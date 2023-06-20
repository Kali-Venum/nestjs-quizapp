import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

// Entity.
import { Quiz } from './quiz.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz
}
