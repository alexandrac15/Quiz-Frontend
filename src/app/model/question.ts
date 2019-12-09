import {QuestionDifficulty} from './questionDifficulty';

export class Question {
  idQuestion: number;
  description: string;
  image: string;
  category: string;
  difficulty: QuestionDifficulty
  isDeprecated: boolean;
}
