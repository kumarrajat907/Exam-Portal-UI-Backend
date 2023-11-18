import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './url';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  public getQuestionByQuiz(qId: any) {
    return this.http.get(`${baseUrl}/question/quiz/?v=${qId}`);
  }

  public addQuestion(question: any) {
    return this.http.post(`${baseUrl}/question/add`, question);
  }

  public getQuestionById(id: any) {
    return this.http.get(`${baseUrl}/question/get?v=${id}`);
  }

  public updateQuestion(question: any) {
    return this.http.put(`${baseUrl}/question/update`, question);
  }

  public deleteQuestion(quesId: any) {
    return this.http.delete(`${baseUrl}/question/delete?v=${quesId}`);
  }
}
