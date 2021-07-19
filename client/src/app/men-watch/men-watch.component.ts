import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'

@Component({
  selector: 'app-men-watch',
  templateUrl: './men-watch.component.html',
  styleUrls: ['./men-watch.component.css']
})
export class MenWatchComponent implements OnInit {
  product;
  price;
  constructor(private us: UsersService) { }

  ngOnInit() {
  }
//   addcart() {
//     this.us.addcart(this.product,this.price);
//     console.log(this.product,this.price)
// }
}
