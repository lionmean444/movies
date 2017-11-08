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

  constructor(private movieService:MovieService) {
  
   }

  ngOnInit() {
   // this.movies = this.movieService.getStaticMovies(); //static

  this.movieService.getMovies().then(data => this.movies = data);
   
  }

}