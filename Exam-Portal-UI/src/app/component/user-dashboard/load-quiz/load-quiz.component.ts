import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  quizzes: any;

  constructor(private route: ActivatedRoute,
    private _quiz: QuizService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param: Params) => {
      if (param['cId']) {
        //console.log('Hello');
        this._quiz.getQuizByCategory(param['cId']).subscribe({
          next: (data: any) => {
            this.quizzes=data.filter((d: any) => d.active == true);
            // this.quizzes = data;
          },
          error: (error: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Error in loading Quiz !!'
            });
          }
        });
      } else {
        //console.log('Hello else');
        this._quiz.getAllQuiz().subscribe({
          next: (data: any) => {
            this.quizzes=data.filter((d: any) => d.active == true);
            //this.quizzes = data;
            //console.log(this.quizzes);
          },
          error: (error: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Error in loading Quiz !!'
            });
          }
        });
      }
    });

  }

}
