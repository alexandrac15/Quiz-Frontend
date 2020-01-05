import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from '../../services/question-service/question.service';
import {Question} from '../../model/question';
import {MatExpansionModule} from '@angular/material';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() idQuiz: number
  questions: Question[];
  constructor(private questionService: QuestionService) { }

  ngOnInit(){
    this.update();
  }
  update(){
    this.questionService.getAllQuestionsOfQuiz(this.idQuiz).subscribe(questions => {
      this.questions = questions;
      console.log(" a intrat in  in ng init in ts"+ this.questions[0]);
    });


  }
  }



