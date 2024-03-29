import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  alternateImage: string = 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/04/hipertextual-coronavirus-retrasa-fase-4-universo-marvel-asi-quedan-nuevas-fechas-estreno-2020920160.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1';


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
    this.router.navigate(["tab2/"])
  }

  async deleteMovie(movieId: any){
    (await this.movieService.deleteMovie(movieId)).subscribe( (res : any) => {
      if(res.response == "Movie deleted"){
        alert("Movie deleted successfully");
        location.reload();
      } else {
        alert("There was an issue deleting this movie")
      }
    }

    )
  }

}
