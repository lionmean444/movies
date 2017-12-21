import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

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

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    //the following is needed as oninit doesnt refresh
    this.movieService.getMovies().then(data => this.movies = data);
    this.editMode = !!this.route.snapshot.paramMap.get("editMode");
    console.log('editmode= ' + this.editMode);
  }

  ngOnInit() {
    // this.movies = this.movieService.getStaticMovies(); //static

    this.movieService.getMovies().then(data =>
      this.movies = data
    );

    this.editMode = !!this.route.snapshot.paramMap.get("editMode");
    console.log('editmode= ' + this.editMode);


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
