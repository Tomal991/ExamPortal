import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/quiz/';
@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  public getQuiz() {
    return this.http.get(`${baseUrl}`);
  }
  public addQuiz(data: any) {
    console.log(data);
    return this.http.post(`${baseUrl}`, data);
  }
  public deleteQuiz(qid: any) {
    return this.http.delete(`${baseUrl}${qid}`);
  }
}
