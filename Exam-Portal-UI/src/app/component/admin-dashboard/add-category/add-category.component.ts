import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  @ViewChild('f')
  addCatForm!: NgForm;

  category = {
    title: '',
    description: ''
  }

  constructor(private categoryService: CategoryService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  addCategory() {
    if (this.category.title.trim() == null || this.category.title.trim() == '') {
      return;
    }
    if (this.category.description.trim() == null || this.category.description.trim() == '') {
      return;
    }
    this.categoryService.addCategory(this.category).subscribe({
      next: (data: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Category Added Successfully'
        })
        this.addCatForm.reset();
      },
      error: (errors: any) => {
        this.snack.open(errors.error, 'Ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        this.addCatForm.reset();
      }
    });
  }

}
