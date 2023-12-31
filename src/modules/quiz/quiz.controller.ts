import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

// Services.
import { QuizService } from './quiz.service';

// DTO.
import { CreateQuizDTO } from './dto/quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createANewQuiz(@Body() body: CreateQuizDTO) {
    return await this.quizService.createANewQuiz(body);
  }
}
