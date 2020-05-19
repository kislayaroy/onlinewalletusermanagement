import { Component, OnInit } from '@angular/core';
import { WalletService } from '../walletservice';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userAdded = false;
  service:WalletService;
  constructor(service: WalletService) { this.service=service; }
  addedUser:User=null;
  ngOnInit(): void {
  }

  public createUser() {
    this.userAdded = true;
    /*let datails=userForm.value;
    let userName=datails.userName;
    let loginName=datails.loginName;
    let password=datails.password;
    let phoneNumber=datails.phoneNumber;
    let user=new User(userName,loginName,password,phoneNumber);
    let result:Observable<User>=this.service.createUser(user); // adding to the store
    result.subscribe((user:User)=>{
      this.addedUser=user;
    },
    err=>{
      console.log("err="+err);
      } );*/
  }
}
