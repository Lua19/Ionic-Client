import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  Name = '';
  Year = null;
  Director = '';
  Rating = null;
  Description = '';
  URL = '';

  formMovie: any = {}

  alternateImage: string = 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/04/hipertextual-coronavirus-retrasa-fase-4-universo-marvel-asi-quedan-nuevas-fechas-estreno-2020920160.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1';

  constructor(private movieService : MoviesService, private router : Router) {}

  ionViewWillEnter(){
    this.formMovie = this.movieService.movieToSend;
  }

  ionViewDidLeave(){
    this.movieService.movieToSend = {}
  }

  async sendMovie(){

    const movie = {
      id: null,
      name : this.Name,
      releaseYear : this.Year,
      director : this.Director,
      rating : this.Rating,
      url : this.URL,
      description : this.Description
    }
    if(this.movieService.movieToSend.id != null){
      movie.id = this.movieService.movieToSend.id
    }


     if(movie.id == null){
        (await this.movieService.createMovie(movie)).subscribe( (res: any) =>{
          if(res.response == "Movie created"){
            alert("Movie created successfully");
            this.router.navigate(["tab1/"])
          }else{
            alert("There was an issue creating this movie")
          }
        });
      } else{
        (await this.movieService.updateMovie(movie)).subscribe( (res: any) =>{
          if(res.response == "Movie updated"){
            alert("Movie updated successfully");
            this.router.navigate(["tab1/"])
          }else{
            alert("There was an issue updating this movie")
          }
        });
      }
  }

}
