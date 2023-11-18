import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quiz = null;
  constructor(private quizService: QuizService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.quizService.getAllQuiz().subscribe({
      next: (data: any) => {
        //console.log(data);
        this.quiz = data;
      },
      error: (errors: any) => {
        console.log(errors);
        this.snack.open(errors.error, 'Ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
    });

  }

  deleteQuiz(id: any) {
    //this swal is for showing message whether you want to delete the quiz or not
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        //if user clicks on confirmButtonText then if block is true and below code gets executed 
        this.quizService.deleteQuiz(id).subscribe({
          next: (data: any) => {
            // console.log(data);
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Quiz Deleted Successfully'
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
