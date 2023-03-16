import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  APIUrl = "http://10.100.0.208:8080/marvel"
  constructor(private http:HttpClient) { }

  getMovies (){
    return this.http.get(this.APIUrl);
  }
}
