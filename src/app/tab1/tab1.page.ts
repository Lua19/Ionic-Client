import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  users :[]| any = [
    {
      "Name":"Mikelol",
      "Username":"Mikelololo",
      "Email": "mike@lol",
      "Password": "Password12"
    },
  ];

  movies:[]|any = [];
  constructor(private movieService : MoviesService,
              private router : Router
    ) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe( (res:any) => {
      this.movies = res["movies"];
      this.movieService.movies = this.movies;
      console.log(this.movies)
    });
  }
  
  searchQuery : string = '';
  searchStudent(){
    console.log(this.searchQuery);
  }

  updateMovie(movie: any){
    this.movieService.movieToSend = movie;
    this.router.navigate(["tabs/tab2/"])
  }

  deleteMovie(movieId: any){
    this.movieService.deleteMovie(movieId).subscribe( (res) => {
      console.log(res);
    }

    )
  }

}
