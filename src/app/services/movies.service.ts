import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies= [];

  APIUrl = "http://localhost:8080"
  constructor(private http:HttpClient) { }

  getMovies (){
    return this.http.get(this.APIUrl+"/marvel");
  }
}
