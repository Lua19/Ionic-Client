import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies= [];

  movieToSend = {};

  APIUrl = "http://localhost:8080"
  constructor(private http:HttpClient) { }

  getMovies (){
    return this.http.get(this.APIUrl+"/marvel");
  }
  createMovie(movie:any){
    return this.http.post(this.APIUrl+"/marvel",movie)
  }

  updateMovie(movie:any){
    return this.http.put(this.APIUrl+"/marvel/"+movie.id,movie)
  }

}
