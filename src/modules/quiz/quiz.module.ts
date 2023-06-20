import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers.
import { QuizController } from './quiz.controller';

// Services.
import { QuizService } from './quiz.service';

// Entity.
import { Quiz } from './entity/quiz.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Quiz]),
  ],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
