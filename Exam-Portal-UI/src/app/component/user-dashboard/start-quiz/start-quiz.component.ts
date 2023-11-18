import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  qId: any;
  question: any;
  show = false;

  marksGot: any = 0;
  correctAnswer: any = 0;
  attempted: any = 0;

  timer: any;

  constructor(private _ls: LocationStrategy, private _route: ActivatedRoute,
    private _question: QuestionService) {

  }

  ngOnInit(): void {
    this.preventBackButton();
    this._route.queryParams.subscribe((param: Params) => {
      this.qId = param['id'];
    });
    this._question.getQuestionByQuiz(this.qId).subscribe({
      next: (data: any) => {
        this.question = data;
        this.timer = this.question.length * 2 * 60;
        this.question.forEach((element: any) => {
          element['myAnswer'] = '';
        });
        this.startTimer();
        //console.log(this.question);
      },
      error: (error: any) => {
        Swal.fire('Error', 'Error in Loading Question', 'error');
      }
    });
  }

  preventBackButton() {
    history.pushState(null, '', location.href);
    this._ls.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }

  submitQuiz() {
    Swal.fire({
      icon: 'info',
      text: 'Do you want to Submit the Quiz !!',
      confirmButtonText: 'Submit',
      showCancelButton: true
    }).then(e => {
      if (e.isConfirmed) {
        this.evalQuiz();
        // console.log('Correct Ans: ' + this.correctAnswer);
        // console.log("Marks obtain: " + this.marksGot);
        // console.log("Attempted: " + this.attempted);
        // console.log(this.question);
      }
    });
  }

  startTimer() {
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        this.evalQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000);
  }

  getFormatedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - (mm * 60);
    return `${mm} min : ${ss} sec`;
  }

  evalQuiz() {
    this.show = true;
    this.question.forEach((q: any) => {
      if (q.myAnswer == q.answer) {
        this.correctAnswer++;
        let marksSingle = this.question[0].quiz.maximumMarks / this.question.length;
        this.marksGot += marksSingle;
      }
      if (q.myAnswer.trim() != '') {
        this.attempted++;
      }
    });
  }

  printScore() {
    window.print();
  }
}
