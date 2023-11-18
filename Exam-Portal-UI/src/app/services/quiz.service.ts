import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import baseUrl from './url';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  public getAllQuiz() {
    return this.http.get(`${baseUrl}/quiz/getAll`);
  }

  public addQuiz(quizData: any) {
    return this.http.post(`${baseUrl}/quiz/add`, quizData);
  }

  public deleteQuiz(id: any) {
    return this.http.delete(`${baseUrl}/quiz/delete?v=${id}`);
  }

  public getQuizById(id: any) {
    return this.http.get(`${baseUrl}/quiz/get?v=${id}`);
  }

  public updateQuiz(quizData: any) {
    return this.http.put(`${baseUrl}/quiz/update`, quizData);
  }

  public getQuizByCategory(id: any) {
    return this.http.get(`${baseUrl}/quiz/category?v=${id}`);
  }
}
