import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  panelOpenState = false;

  category = null;
  constructor(private _category: CategoryService, private router: Router,
    private _quiz: QuizService) {

  }

  ngOnInit(): void {
    this._category.getAllCategory().subscribe({
      next: (data: any) => {
        this.category = data;
      },
      error: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error in loading Category !!'
        });
      }
    });
  }

  viewByCategory(id: any) {
    //console.log(id);
    this.router.navigate(['/user-dashboard/loadQuiz'], { queryParams: { cId: id } });
  }
}
