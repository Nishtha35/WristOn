import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name;
  avail;
  quantity;
  price;
  constructor(private us: UsersService) { }

  ngOnInit() {
  } 
  addData() {
    this.us.addData(this.name,this.avail,this.quantity,this.price);
    // console.log(this.name)
}


  // constructor() { }

  // ngOnInit() {
  // }

  // employees:any[]=[
  //   {
  //     "fname":"Rishabh",
  //     "lname":"Malik",
  //     "age":19
  //   },
  //   {
  //     "fname":"Nishtha",
  //     "lname":"Sehgal",
  //     "age":19
  //   },
  //   {
  //   "fname":"Tanvi",
  //   "lname":"Malhan",
  //   "age":19
  //   }
  // ]
}
