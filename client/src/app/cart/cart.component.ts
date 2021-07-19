import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  arr;
  //name;
  constructor( private us: UsersService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.us.getData().subscribe(data=>{this.arr=data; });
  }

  delData(id){
    this.us.delData(id);
  }
  employees:any[]=[
      {
        "name":"Titan Neo Analog Black-1729SL02",
        "avail":"In Stock",
        "quantity":1,
        "price":1935
      },
      {
        "name":"Fogg Analog Men's Watch 2047-WH",
        "avail":"In Stock",
        "quantity":1,
        "price":2000
      },
      {
        "name":"Timex Analog watch-TW00ZR262E",
        "avail":"In Stock",
        "quantity":1,
        "price":1500
      }
    ]
}
