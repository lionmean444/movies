import { Injectable } from '@angular/core';
import {Movie, IMovie} from '../../models/movie'

@Injectable()
export class MovieService {

  mov: Movie = new Movie('title',3,false,new Date('1/2/2017'),true,[]);
 
  movies:IMovie[] = [
   this.mov,
   new Movie('title',3,false,new Date('1/2/2017'),true,[]),
   {title:'title',rating:3,thiss:false, dateWatched: new Date('1/2/2017'),watchAgain:true, characters: []}
   //{'title',3,false,new Date('1/2/2017'),true,[]}
]

  constructor() {}
  
  getMovies():IMovie[] {
    return this.movies;
  }

}
