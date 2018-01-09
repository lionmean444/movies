import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../services/movie-service.service'
import { Movie, IMovie } from '../../models/movie'

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
  providers: [MovieService],
})


export class MovielistComponent implements OnInit {
  
  @Input() searchTitle: String;
  @Input() searchWatchAgain: boolean;

  movies: Movie[];
  editMode: boolean;
  planToWatch: Boolean;

  constructor(private movieService: MovieService, private activatedroute:ActivatedRoute) {
    //the following is needed as oninit doesnt refresh
    activatedroute.queryParams
    .subscribe(params => {
      this.planToWatch = params['toWatch']=="true";
     });
     
     
     this.movieService.getMovies().then(data =>
      this.movies = data.filter(m=>m.planToWatch == this.planToWatch)
      );
    console.log('toWatch param = ' + this.planToWatch);
    
  }

  ngOnInit() {
    // this.movies = this.movieService.getStaticMovies(); //static
     
    this.movieService.getMovies().then(data =>
      //this.movies = data 
      this.movies = data.filter(m=>m.planToWatch == this.planToWatch)
      
    );
    console.log('toWatch init = ' + this.planToWatch);

  }
  deleteMovie(movie: IMovie): void {
    this.movieService.deleteMovie(movie._id)
      .then(() => {
        this.movies = this.movies.filter(m => m !== movie);
      });
  }

  public searchMovie() {
    console.log('start search movie for ' + this.searchTitle);
    if (this.searchTitle){
     
    this.movieService.getMovies().then(data =>
      
      this.movies = data.filter(
        m => m.title.toLowerCase()  === this.searchTitle.toLowerCase()));
      
      } else {

        this.movieService.getMovies().then(data =>
          this.movies = data.filter(m=>m.watchAgain == this.searchWatchAgain ));

      }
    }

  public editModeToggle(turnOn: boolean) {
    console.log('editMode is ' + this.editMode + 'turning it ' + turnOn);
    this.editMode = turnOn;
    return false;
  }

}
