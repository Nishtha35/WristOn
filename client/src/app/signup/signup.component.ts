import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username;
  userpass;
  useremail;
  constructor(private us: UsersService) { }
  // constructor() { }

  ngOnInit() {
  }
//   addsData() {
//     if(this.userpass.length<8)  //password length validation
//     {
//       alert('password must be atleast 8 characters long');
//     }
//     if (this.useremail.indexOf("@")<1 || this.useremail.lastIndexOf(".")<this.useremail.indexOf("@")+2 || this.useremail.lastIndexOf(".")+2>=this.useremail.length){  
//       alert("Please enter a valid e-mail address");  
//       }
//     else{
//     this.us.addsData(this.usename,this.userpass,this.useremail);
//     }
//     console.log(this.userpass.length)
//     // alert(this.password.lenght);
//     // console.log(this.name)
// }
addsData() {
  if(this.username=="")
  {
    alert("Username can't be left blank");
  }
  if(this.userpass.length<8)
   {
     alert("Password must be atleast of 8 characters");
   }
   if (this.useremail.indexOf("@")<1 || this.useremail.lastIndexOf(".")<this.useremail.indexOf("@")+2 || this.useremail.lastIndexOf(".")+2>=this.useremail.length || this.useremail==""){  
    alert("Please enter a valid e-mail address");  
    }  
   else{
  this.us.addsData(this.username,this.userpass,this.useremail);
  alert('Registration Complete');
   }
   console.log(this.userpass.length)
}
}
