import { IsNotEmpty } from 'class-validator';

export class CreateQuestionDTO {
  @IsNotEmpty({ message: 'The question can not be empty.' })
  question: string;

  @IsNotEmpty({ message: 'The quiz id can not be empty.' })
  quizId: number;
}
