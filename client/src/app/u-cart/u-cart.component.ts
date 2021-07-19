import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-u-cart',
  templateUrl: './u-cart.component.html',
  styleUrls: ['./u-cart.component.css']
})
export class UCartComponent implements OnInit {
  arr;
  watchname;
  price;
  image;
  constructor(private us: UsersService) { }

  ngOnInit() {
    this.getWatchData();
  }
  getWatchData() {
    this.us.getWatchData().subscribe(data => { this.arr = data; });
  }
  addDataToCart() {
    this.us.addDataToCart(this.watchname,this.price,this.image);
    // console.log(this.name)
  }
  delWatchData(id) {
    this.us.delWatchData(id);
  }
}
