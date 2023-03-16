import { Component, OnInit } from '@angular/core';
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
  constructor(private movieService : MoviesService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe( (res:any) => {
      this.movies = res["movies"];
      console.log(this.movies)
    });
  }
  
  searchQuery : string = '';
  searchStudent(){
    console.log(this.searchQuery);
  }

}
