import { Component, OnInit } from '@angular/core';
import { UsersService} from '../users.service';


@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css']
})
export class NewArrivalComponent implements OnInit {
  watchname;
  price;
  image;
  a;
  constructor(private us: UsersService) {
  //   if(this.a=0)
  //  {this.watchname="WRIGHTRACk";
  //   this.price="Rs368"; 
  //   this.image="../../assets/N1.jpg";
  //   console.log("constructor");
  //  }
   }

   
  ngOnInit() {
  }
  
  addDataToCart() {
    this.us.addDataToCart(this.watchname="WRIGHTRACK",this.price="368",this.image="../../assets/N1.jpg");
    console.log(this.watchname,this.price);
  }
  watch2(){
    this.us.watch2(this.watchname="MG-0T89",this.price="1099",this.image="../../assets/N2.jpg");
  }
  watch3(){
    this.us.watch3(this.watchname="NF-1975",this.price="1499",this.image="../../assets/N4.jpg");
  }
  watch4(){
    this.us.watch4(this.watchname="FAP-907",this.price="899",this.image="../../assets/N5.jpg");
  }
  watch5(){
    this.us.watch5(this.watchname="WSM-89",this.price="599",this.image="../../assets/N7.jpg");
  }
  watch6(){
    this.us.watch6(this.watchname="SWY-4P",this.price="1499",this.image="../../assets/N8.jpg");
  }
  watch7(){
    this.us.watch7(this.watchname="HASM-12",this.price="699",this.image="../../assets/N10.jpg");
  }
  watch8(){
    this.us.watch8(this.watchname="HYG34",this.price="1300",this.image="../../assets/N11.jpg");
  }
  watch9(){
    this.us.watch9(this.watchname="TY-A375",this.price="1095",this.image="../../assets/N3.jpg");
  }
  watch10(){
    this.us.watch10(this.watchname="ACD-9086",this.price="499",this.image="../../assets/N6.jpg");
  }
  watch11(){
    this.us.watch11(this.watchname="ADWR-097",this.price="1899",this.image="../../assets/N9.jpg");
  }
  watch12(){
    this.us.watch12(this.watchname="CBADG-98 ",this.price="1699",this.image="../../assets/N12.jpg");
  }
}
