import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {

  id = null;
  title = '';
  questions: any = null;

  getQuestion: any = null;
  constructor(private route: ActivatedRoute, private ques: QuestionService,
    private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.id = params['id'];
      this.title = params['title'];
    });

    this.ques.getQuestionByQuiz(this.id).subscribe({
      next: (data: any) => {
        //console.log(this.id);
        this.questions = data;
        // console.log(this.questions);
      },
      error: (errors: any) => {
        console.log(this.id);
        this.snack.open(errors.error, 'Ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
    });
  }

  updateQuestion(quesId: any) {
    this.router.navigate(['/admin/add-question'], { queryParams: { update: quesId, title: this.title, qId: this.id } });

  }

  deleteQuestion(quesId: any) {
    //this swal is for showing message whether you want to delete the quiz or not
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        //if user clicks on confirmButtonText then if block is true and below code gets executed 
        this.ques.deleteQuestion(quesId).subscribe({
          next: (data: any) => {
            // console.log(data);
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Question Deleted Successfully'
            });
            this.ngOnInit();
          },
          error: (errors: any) => {
            console.log(errors);
            this.snack.open(errors.error.text, 'Ok', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right'
            });
          }
        });
      }
    });
  }
}
