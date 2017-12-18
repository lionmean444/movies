import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
  movie:IMovie = new Movie(null, 1,'', null ,false, new Date(),false, []);
  
  constructor(private movieService:MovieService, private router: Router) {
    
     }

  ngOnInit() {
  }

  onSubmit() { 
 

  }
  public save(){
    this.movieService.addMovie(this.movie)
    .then(() => {
      console.log('added movie' + this.movie.title);
     // this.movies = this.movies.filter(m => m !== movie);
     //see how we can modify the list movie[] and add this instead of a reload.
      });

    this.router.navigateByUrl('/movielist');
  }
}
