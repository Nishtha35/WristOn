import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
    fname;
    msg;
   
    constructor(private us: UsersService) { }
  // constructor() { }

  ngOnInit() {
  }
  fb_addData() {
    // if(this.fname=="")
    // {
    //   alert("Name can't be left blank");
    // }
    if(this.msg=="")
    {
      alert("Message can't be left blank");
    }
    else
    {
    this.us.fb_addData(this.fname,this.msg);
    alert('Feedback Submitted');
    }
}
}