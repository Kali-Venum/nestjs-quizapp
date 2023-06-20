import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Entity.
import { Question } from './entity/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private QuestionRepository: Repository<Question>,
  ) {}
}
