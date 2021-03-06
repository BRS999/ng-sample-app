import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username
  password
  mouseoverLogin

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/events'])

    } else {
      this.router.navigate(['/user/login']);
    }
  }
  cancel() {

  }

}
