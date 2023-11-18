import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quizzes',
  templateUrl: './add-quizzes.component.html',
  styleUrls: ['./add-quizzes.component.css']
})
export class AddQuizzesComponent implements OnInit {

  @ViewChild('f')
  addQuizForm!: NgForm ;
  quiz = {
    title: '',
    description: '',
    maximumMarks: '',
    noOfQuestion: '',
    active: true,
    category: {

    }
  }

  category = null;

  constructor(private categoryService: CategoryService, private snack: MatSnackBar,
    private quizService: QuizService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe({
      next: (data: any) => {
        //console.log(data);
        this.category = data;
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

  addQuiz() {
    //console.log(this.quiz);
    this.quizService.addQuiz(this.quiz).subscribe({
      next: (data: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Quiz Added Successfully'
        })
        this.addQuizForm.reset();
      },
      error:(errors:any)=>{
        this.snack.open(errors.error, 'Ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        this.addQuizForm.reset();
      }
    });

  }

}
