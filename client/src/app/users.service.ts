
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})  
export class UsersService {

  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient, private router:Router) { }    
  addData(name,avail,quantity,price) {
      const obj = {name,avail,quantity,price};
      this
          .http
          .post(`${this.url}/add`, obj)  //pass object into url/add
          .subscribe(res => console.log(res));
  }
  
  addsData( username,userpass,useremail){
    const obj = { username,userpass,useremail};
      this
          .http
          .post(`${this.url}/adds`, obj)  //pass object into url/adds
          .subscribe(res => console.log(res));
  }

  // addcart(product,price){
  //   const obj = { product,price};
  //     this
  //         .http
  //         .post(`${this.url}/ads`, obj)  //pass object into url/ads
  //         .subscribe(res => console.log(res));
  // }

  addDataToCart(watchname,price,image) {
    const obj = {watchname,price,image};
    this
        .http
        .post(`${this.url}/productt`, obj)  //pass object into url/loginn
        .subscribe(res => console.log(res));
  }

  watch2(watchname,price,image) {
    const obj = {watchname,price,image};
    this
        .http
        .post(`${this.url}/productt`, obj)  //pass object into url/loginn
        .subscribe(res => console.log(res));
  }

  watch3(watchname,price,image) {
    const obj = {watchname,price,image};
    this
        .http
        .post(`${this.url}/productt`, obj)  //pass object into url/loginn
        .subscribe(res => console.log(res));
  }

  watch4(watchname,price,image) {
    const obj = {watchname,price,image};
    this
        .http
        .post(`${this.url}/productt`, obj)  //pass object into url/loginn
        .subscribe(res => console.log(res));
  }

  watch5(watchname,price,image) {
    const obj = {watchname,price,image};
    this
        .http
        .post(`${this.url}/productt`, obj)  //pass object into url/loginn
        .subscribe(res => console.log(res));
  }

  watch6(watchname,price,image) {
    const obj = {watchname,price,image};
    this
        .http
        .post(`${this.url}/productt`, obj)  //pass object into url/loginn
        .subscribe(res => console.log(res));
  }

  watch7(watchname,price,image) {
    const obj = {watchname,price,image};
    this
        .http
        .post(`${this.url}/productt`, obj)  //pass object into url/loginn
        .subscribe(res => console.log(res));
  }

  watch8(watchname,price,image) {
    const obj = {watchname,price,image};
    this
        .http
        .post(`${this.url}/productt`, obj)  //pass object into url/loginn
        .subscribe(res => console.log(res));
  }

  watch9(watchname,price,image) {
    const obj = {watchname,price,image};
    this
        .http
        .post(`${this.url}/productt`, obj)  //pass object into url/loginn
        .subscribe(res => console.log(res));
  }

  watch10(watchname,price,image) {
    const obj = {watchname,price,image};
    this
        .http
        .post(`${this.url}/productt`, obj)  //pass object into url/loginn
        .subscribe(res => console.log(res));
  }

  watch11(watchname,price,image) {
    const obj = {watchname,price,image};
    this
        .http
        .post(`${this.url}/productt`, obj)  //pass object into url/loginn
        .subscribe(res => console.log(res));
  }

  watch12(watchname,price,image) {
    const obj = {watchname,price,image};
    this
        .http
        .post(`${this.url}/productt`, obj)  //pass object into url/loginn
        .subscribe(res => console.log(res));
  }

  getWatchData() {
    return(
    this
        .http
        .get(`${this.url}/productt`)
    );
  }

  delWatchData(id) {
    console.log("deleted");
      return this.http.get(`${this.url}/deletewatch/${id}`).subscribe();
  }

 ////////////////////////////feedback onclick function///////////////////////////////// 
 fb_addData( fname,msg){
  const obj = { fname,msg};
    this
        .http
        .post(`${this.url}/fb`, obj)  //pass object into url/add
        .subscribe(res => console.log(res));
}

////////////////////////////shipping onclick function///////////////////////////////// 
ship_addData( fullname,emaill,mno,ad){
  const obj = { fullname,emaill,mno,ad};
    this
        .http
        .post(`${this.url}/shipp`, obj)  //pass object into url/add
        .subscribe(res => console.log(res));
}
  
  getData() {
      return(
      this
          .http
          .get(`${this.url}`)
      );
  }
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }


    up_data(name,avail,price,quantity, id) {

      const obj = {
          name: name,
          avail:avail,
          price:price,
          quantity:quantity
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    signIn(username,userpass){
      const obj = {username,userpass};
      console.log(obj);
      this
        .http
        .post(`${this.url}/signin`,obj)
        .subscribe((res:any) => {
          if(res.message){
            alert(res.message);
          }
          else{
 
            this.router.navigateByUrl('/');
          }
        });
    }
}