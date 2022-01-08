import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };
  constructor(
    private userService: UserService,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      this._snackbar.open('Username is required', 'ok', {
        duration: 4000,
      });

      return;
    }

    this.userService.createUser(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Done', 'User is registered', 'success');
      },
      (error) => {
        this._snackbar.open('Username already exists', 'ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    );
  }
}
