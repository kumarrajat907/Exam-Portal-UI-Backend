import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  @ViewChild('f')
  addQuesForm!: NgForm;
  addMsg = '';
  getQuestion = {
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    quiz: {
      qId: '',
    }
  };

  qId = null;
  title = '';
  question = {
    quesId: '',
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    quiz: {
      qId: '',
    }
  };

  constructor(private route: ActivatedRoute, private ques: QuestionService,
    private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.qId = params['qId'];
      this.title = params['title'];
      this.question.quiz.qId = params['qId'];
      this.addMsg = 'Add';
      if (params['update']) {
        this.question.quesId = params['update'];
        this.qId = params['qId'];
        this.ques.getQuestionById(this.question.quesId).subscribe({
          next: (data: any) => {
            this.getQuestion = data;
            //console.log(this.getQuestion);
            this.question.content = this.getQuestion.content;
            this.question.option1 = this.getQuestion.option1;
            this.question.option2 = this.getQuestion.option2;
            this.question.option3 = this.getQuestion.option3;
            this.question.option4 = this.getQuestion.option4;
            this.question.answer = this.getQuestion.answer;
            this.question.quiz.qId = this.getQuestion.quiz.qId;
          },
          error: (errors: any) => {
            this.snack.open(errors.error, 'Ok', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right'
            });
          }
        });
        this.addMsg = 'Update';
      }
    });
  }

  addQuestion() {
    if (this.question.content.trim() == null || this.question.content.trim() == '') {
      return;
    }
    if (this.question.option1.trim() == null || this.question.option1.trim() == '') {
      return;
    }
    if (this.question.option2.trim() == null || this.question.option2.trim() == '') {
      return;
    }
    if (this.question.option3.trim() == null || this.question.option3.trim() == '') {
      return;
    }
    if (this.question.option4.trim() == null || this.question.option4.trim() == '') {
      return;
    }
    if (this.question.answer.trim() == null || this.question.answer.trim() == '') {
      return;
    }
    //console.log(this.question);
    if (this.route.snapshot.queryParams['update']) {
      //console.log('hello');
      this.ques.updateQuestion(this.question).subscribe({
        next: (data: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            confirmButtonText: 'OK',
            text: 'Question Updated Successfully'
          }).then((result) => {
            if (result.isConfirmed) {
              this.addQuesForm.reset();
              this.router.navigate(['/admin/question'], { queryParams: { id: this.qId, title: this.title } });
            }
          });
        },
        error: (errors: any) => {
          this.snack.open(errors.error, 'Ok', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
        }
      });
    }
    else {
      this.ques.addQuestion(this.question).subscribe({
        next: (data: any) => {
          //console.log(data);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            confirmButtonText: 'OK',
            text: 'Question Added Successfully'
          }).then((result) => {
            if (result.isConfirmed) {
              this.addQuesForm.reset();
              this.router.navigate(['/admin/question'], { queryParams: { id: this.qId, title: this.title } });
            }
          });
        },
        error: (errors: any) => {
          this.snack.open(errors.error, 'Ok', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
        }
      });
    }
  }
}
