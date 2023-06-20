import { Body, Controller, Post } from '@nestjs/common';

// Servicves.
import { QuestionService } from './question.service';

// DTO.
import { CreateQuestionDTO } from './dto/question.dto';

@Controller('Question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post('/')
  async createAQuestion(@Body() body: CreateQuestionDTO) {
    return await this.questionService.createAQuestion(body);
  }
}
