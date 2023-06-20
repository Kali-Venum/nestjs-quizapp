import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Entity.
import { Question } from './entity/question.entity';

// DTO.
import { CreateQuestionDTO } from './dto/question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private QuestionRepository: Repository<Question>,
  ) {}

  async createAQuestion(body: CreateQuestionDTO) {
    return await this.QuestionRepository.save(body);
  }
}
