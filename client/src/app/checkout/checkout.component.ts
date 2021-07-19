import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  fullname;
  emaill;
  mno;
  ad;
  city;
  state;
 
  constructor(private us: UsersService) { }
  // constructor() { }

  ngOnInit() {
  }
  ship_addData() {
    if(this.fullname=="")
  {
    alert("Username can't be left blank");
  }
  if(this.ad=="")
  {
    alert("Address can't be left blank");
  }
  if (this.emaill.indexOf("@")<1 || this.emaill.lastIndexOf(".")<this.emaill.indexOf("@")+2 || this.emaill.lastIndexOf(".")+2>=this.emaill.length || this.emaill==""){  
    alert("Please enter a valid e-mail address");  
    }  
    if(this.mno.length<10)
   {
     alert("Enter valid mobile number");
   }
   if(this.city=="")
   {
     alert("City can't be left blank");
   }
   if(this.state=="")
   {
     alert("State can't be left blank");
   }
   else{
    this.us.ship_addData(this.fullname,this.emaill,this.mno,this.ad);
    alert('Shipping details added');
   }
   
}
}
