import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Feedback } from '../../models/feedback'

@Injectable()
export class AuthServiceProvider {



  constructor(public http: Http) {

  }

  signUp(
    fullname: string,
    email: string,
    password: string
  ):Observable<Feedback> {
    let myHeader = new Headers()
    myHeader.append('Content-Type','application/json')

    let body = {
      'fullname':fullname,
      'email':email,
      'password':password
    }
    return this.http.post('https://codingthailand.com/api/insert_user.php', body, { headers: myHeader })
      .map(
        (res:Response) => <Feedback>res.json()
      )
  }

  signUp2(
    email: string,
    password: string
  ):Observable<boolean> {
    let myHeader = new Headers()
    myHeader.append('Content-Type','application/json')

    let body = {
      "client_id": "gh14h1ZH6XBE1gjh2PJnr8wpaFwxu39V",
      "email": email,
      "password": password,
      "connection": "Username-Password-Authentication",
    }
    return this.http.post('https://siwawut13.auth0.com/dbconnections/signup', body, { headers: myHeader })
      .map(
        (res:Response) => {
          let success = res.json();
          if (success) return true;
        }
      )
      .catch(this.handleError);
  }

  loginAuth0(
    email: string,
    password: string
  ):Observable<boolean> {
    let myHeader = new Headers()
    myHeader.append('Content-Type','application/json')

    let body = {
      "grant_type": "password",
      "username": email,
      "password": password,
      "audience": "https://siwawut13.auth0.com/api/v2/",
      "scope": "openid",
      "client_id": "gh14h1ZH6XBE1gjh2PJnr8wpaFwxu39V",
    }
    return this.http.post('https://siwawut13.auth0.com/oauth/token', body, { headers: myHeader })
    .map(
      (res:Response) => {
        let token = res.json();
        if (token){
          localStorage.setItem('token',JSON.stringify(token));
          return true;
        }
      }
    )
    .catch(this.handleError2);

  }

  private handleError(error: any) {
    return Observable.throw(error.json().description || 'Server error')
  }

  private handleError2(error: any) {
    return Observable.throw(error.json().error_description || 'Server error')
  }
}
