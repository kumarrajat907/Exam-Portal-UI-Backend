import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  qId: any;
  quiz: any;

  constructor(private _route: ActivatedRoute, private _quiz: QuizService,
    private _router: Router) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe((param: Params) => {
      this.qId = param['id'];
    });

    this._quiz.getQuizById(this.qId).subscribe({
      next: (data: any) => {
        this.quiz = data;
        //console.log(this.quiz);
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

  start(id: any) {
    //console.log(id);
    Swal.fire({
      icon: 'info',
      //title: 'Message',
      text: 'Are you sure want to start the quiz !!',
      confirmButtonText: 'Start',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._router.navigate(['start-quiz'], { queryParams: { id: id } });
      }
    });
  }
}
