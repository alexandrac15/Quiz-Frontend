import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quiz} from '../../model/quiz';
import {Question} from '../../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // tslint:disable-next-line:max-line-length
      Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQWRtaW5pc3RyYXRvciIsInVuaXF1ZV9uYW1lIjoiRWNhdGVyaW5hIEFuZHJvbmVzY3UiLCJuYW1laWQiOiJhZG1pbiIsIm5iZiI6MTU2NTE3ODAxOSwiZXhwIjoxNTk1MTgxNjE5LCJpYXQiOjE1NjUxNzgwMTl9.zmZFPVL9VT2mFwmq0FoEeENBzSNsDnVNXiHwzI5xQYc'
    })
  };
  constructor(private http: HttpClient) { }
  getAllQuestions(): Observable<Question[]> {
    console.log('Esteeee in servie-getAllQuestions');
    const url = 'http://localhost:8080/quiz_war_exploded/questions/' ;
    console.log(url);
    return this.http.get<Question[]>(url, this.httpOptions);
  }
}
