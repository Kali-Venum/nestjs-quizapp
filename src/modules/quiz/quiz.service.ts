import { Body, Injectable } from '@nestjs/common';
import { InjectDataSource, InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { CreateQuizDTO } from './dto/quiz.dto';

// Entity.
import { Quiz } from './entity/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private QuizRepository: Repository<Quiz>,
  ) {}

  getAllQuiz() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  async createANewQuiz(@Body() body: CreateQuizDTO) {
    return this.QuizRepository.save(body)
  }
}
