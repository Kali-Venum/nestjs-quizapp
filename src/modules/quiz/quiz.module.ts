import { Module } from '@nestjs/common';

// Controllers.
import { QuizController } from './quiz.controller';

// Services.
import { QuizService } from './quiz.service';

@Module({
  controllers: [QuizController],
  providers: [QuizService]
})
export class QuizModule {}
