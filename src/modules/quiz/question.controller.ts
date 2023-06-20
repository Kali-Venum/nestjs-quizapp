import { Controller } from '@nestjs/common';

// Servicves.
import { QuestionService } from './question.service';

@Controller('Question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}
}
