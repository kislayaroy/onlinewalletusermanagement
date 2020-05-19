import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';
import { Account } from './model/account';

@Injectable()
export class WalletService{

    client:HttpClient ;
  constructor(client:HttpClient ){
  this.client=client;
  }
    baseurl='http://localhost:8086/users';
    userList:Array<User>=[];

  createUser(user:User): Observable<User>{
    let url='http://localhost:8086/users/add';
    let result:Observable<User>= this.client.post<User>(url,user);
    return result;
    }

    fetchAllFlights():Observable<User[]>
    {
      let url='http://localhost:8086/users';
      let observable:Observable<User[]> =this.client.get<User[]>(url);
      return observable;
    }








}