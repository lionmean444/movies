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
  movie:IMovie = new Movie(1,'test', 3,true, new Date(),true, []);
  
  constructor(private movieService:MovieService, private router: Router) {
    
     }

  ngOnInit() {
  }

  onSubmit() { 
 

  }
  public save(){
    this.movieService.addMovie(this.movie);
    console.log('movie= '+JSON.stringify(this.movie));
    this.router.navigateByUrl('/movielist');
  }
}
