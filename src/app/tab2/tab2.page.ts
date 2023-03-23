import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  formMovie :any = {};

  constructor(private movieService : MoviesService) {}
  ngOnInit(): void {
    this.formMovie = this.movieService.movieToSend;
  }

  sendMovie(movie:any){
    if(movie.id == null){
      this.movieService.createMovie(movie).subscribe( (res) =>{
        console.log(res);
      });
    } else{
      this.movieService.updateMovie(movie).subscribe( (res) =>{
        console.log(res);
      });
    }
  }

}
