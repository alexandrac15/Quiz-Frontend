import { Component, OnInit } from '@angular/core';
import {Question} from '../../model/question';
import {QuestionService} from '../../services/question-service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
   questions: Question[];
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.update();
  }

  update() {
    this.questionService.getAllQuestions().subscribe(questions => {
      this.questions = questions;
    });
  }
}
