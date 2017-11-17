import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie-service.service'
import {Movie, IMovie} from '../../models/movie'


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  providers:[MovieService],
})
export class AddMovieComponent implements OnInit {
  submitted:boolean;
  movie:IMovie = new Movie(1,'test', 3,true, new Date(),true, []);
  
  constructor(private movieService:MovieService) {
    
     }

  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true;
    
    var t = this.movie.title;
    console.log('t= '+t);
    console.log('movie= '+JSON.stringify(this.movie));

  }
  public save(){
    this.movieService.addMovie(this.movie);
    console.log('movie= '+JSON.stringify(this.movie));
  }
}
