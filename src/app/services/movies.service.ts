import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies= [];

  movieToSend : any = {};

  APIUrl = "http://localhost:8080"
  constructor(private http:HttpClient) { }

  getMovies (){
    return this.http.get(this.APIUrl+"/marvel");
  }
  async createMovie(movie:any){
    return await this.http.post(this.APIUrl+"/marvel",movie)
  }

  async updateMovie(movie:any){
    return await this.http.put(this.APIUrl+"/marvel/"+movie.id,movie)
  }
  async deleteMovie(movieId:any){
    return await this.http.delete(this.APIUrl+"/marvel/"+movieId);
  }
  

}
