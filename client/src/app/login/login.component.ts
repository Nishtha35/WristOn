import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username;
userpass;
  constructor(private us: UsersService) { }

  ngOnInit() {
  }
  signIn(){
    this.us.signIn(this.username,this.userpass);
  }
}
