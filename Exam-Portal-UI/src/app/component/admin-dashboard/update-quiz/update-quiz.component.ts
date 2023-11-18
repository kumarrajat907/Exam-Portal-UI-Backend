import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  qId = null;
  quizUpdateData: any;
  category: any;

  constructor(private route: ActivatedRoute, private quizService: QuizService,
    private snack: MatSnackBar, private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      //console.log(params.id);
      this.qId = params.id;
    }
    );

    this.quizService.getQuizById(this.qId).subscribe({
      next: (data: any) => {
        this.quizUpdateData = data;
      },

      error: (errors: any) => {
        this.snack.open(errors.error, 'Ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
    });

    this.categoryService.getAllCategory().subscribe({
      next: (data: any) => {
        this.category = data;
      }
    });
  }

  updateQuiz() {
    console.log(this.quizUpdateData);
    this.quizService.updateQuiz(this.quizUpdateData).subscribe({
      next: (data: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Updated',
          confirmButtonText: 'OK',
          text: 'Quiz Updated Successfully'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigateByUrl('/admin/view-quiz');
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
