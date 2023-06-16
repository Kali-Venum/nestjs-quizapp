import { IsNotEmpty } from 'class-validator';

export class CreateQuizDTO {
  @IsNotEmpty({ message: 'The quiz should have a title.' })
  title: string;

  @IsNotEmpty({ message: 'The quiz should have a description.' })
  description: string;
}
