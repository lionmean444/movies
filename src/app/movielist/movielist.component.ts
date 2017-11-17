import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {MovieService} from '../services/movie-service.service'
import {Movie, IMovie} from '../../models/movie'

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
  providers:[MovieService],
})

 
export class MovielistComponent implements OnInit {

 
  movies:Movie[];
  editMode: boolean;

  constructor(private movieService:MovieService) {
    //the following is needed as oninit doesnt refresh
    this.movieService.getMovies().then(data => this.movies = data);
   }

  ngOnInit() {
   // this.movies = this.movieService.getStaticMovies(); //static

  this.movieService.getMovies().then(data => this.movies = data);
   
  }
  deleteMovie(movie: IMovie): void {
    this.movieService.deleteMovie(movie._id)
        .then(() => {
          this.movies = this.movies.filter(m => m !== movie);
          });
  }
  public editModeToggle(turnOn:boolean){
    console.log('editMode is '+ this.editMode+'turning it '+ turnOn);
    this.editMode = turnOn;
    return false;
  }

}
