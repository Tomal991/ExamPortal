import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  categories = {
    title: '',
    description: '',
  };

  constructor(
    private categoryService: CategoryService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    if (this.categories.title.trim() == '' || this.categories.title == null) {
      this.snackbar.open('Title is required', 'ok', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });

      return;
    }

    this.categoryService.addCategories(this.categories).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Done', 'Category is created', 'success');
      },
      (error) => {
        this.snackbar.open('Category could not be created', 'ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    );
  }
}
