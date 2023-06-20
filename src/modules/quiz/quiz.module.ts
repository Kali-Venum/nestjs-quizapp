import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers.
import { QuizController } from './quiz.controller';
import { QuestionController } from './question.controller';

// Services.
import { QuizService } from './quiz.service';
import { QuestionService } from './question.service';

// Entity.
import { Quiz } from './entity/quiz.entity';
import { Question } from './entity/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question])],
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
