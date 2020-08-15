import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card';

  user: any;

  constructor(
    private userService: UserService,
    private toastr: ToastrService 
  ) {

  }

  ngOnInit() {
    this.changeUser();
  }

  

  changeUser() {
    this.userService.getUser().subscribe(
      (user: any) => {
        this.user = user.results[0];
      },
      (error) => {
        this.toastr.error(error.status, "Could not fetch the user details");
      }
    );
  }
}
