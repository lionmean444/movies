import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {MovieService} from '../services/movie-service.service'
import {Movie, IMovie} from '../../models/movie'

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
  providers:[MovieService],
})
export class EditMovieComponent implements OnInit {

  movie: Movie;
  constructor(private movieService:MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( params =>
      console.log('param= '+ this.route.snapshot.paramMap.get('id')));
      var id = this.route.snapshot.paramMap.get('id');

      this.movieService.getMovie(id).then(data => this.movie = data);
        
        //console.log('edited movie= '+ this.movie);
  }

  public save(){
    this.movieService.editMovie(this.movie)
    .then(() => {
      console.log('edited movie saved: ' + this.movie.title);
     // this.movies = this.movies.filter(m => m !== movie);
     //see how we can modify the list movie[] and add this instead of a reload.
      });

    this.router.navigateByUrl('/movielist?editMode=true');
  }
  
}
