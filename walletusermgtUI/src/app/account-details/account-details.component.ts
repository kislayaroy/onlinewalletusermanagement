import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Account } from '../model/account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
    user:User;
    account:Account;
    isEditMode = false;

  constructor() {
    this.user = new User();
    this.user.userId = 1;
    this.user.userName = 'Kislaya';
    this.user.password = 'kislaya';
    this.user.phoneNumber = '9900783491';
    this.user.loginName = 'kislaya';
    this.account = new Account();
    this.account.accoundId = 123;
    this.account.accountBalance = 900000;
   }

  ngOnInit(): void {
  }

  public updateDetails() {
      this.isEditMode = !this.isEditMode;
  }

}
