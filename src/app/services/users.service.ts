import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  APIUrl = "http://localhost:8080"

  login(body: any){
    return this.http.post(this.APIUrl+"/users/login", body)
  }

  register(body: any){
    return this.http.post(this.APIUrl+"/users/register", body)
  }
}
