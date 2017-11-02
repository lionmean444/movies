import { Component, OnInit, Injectable } from '@angular/core';
import {MovieService} from '../services/movie-service.service'
import {Movie, IMovie} from '../../models/movie'

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
  providers:[MovieService],
})

 
export class MovielistComponent implements OnInit {

 
  movies:IMovie [];

  constructor(private movieService:MovieService) {
  
   }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}
