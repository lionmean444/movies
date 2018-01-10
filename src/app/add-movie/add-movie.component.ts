import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie-service.service'
import { Movie, IMovie } from '../../models/movie'
import { MovieSearchResult, IMovieSearchResult } from '../../models/movieSearchResult'
import { forEach } from '@angular/router/src/utils/collection';
 

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  providers: [MovieService],
})
export class AddMovieComponent implements OnInit {
  submitted: boolean;
  searchClicked: boolean;
  movie: IMovie = new Movie(null, 1, '', null, false, new Date(), false, true, []);
  poster: String;
  searchResults: any[] = [];
  selectedSearchResult: any = this.selectedSearchResult = new Movie("1", 0, 'test', 3, false, null, false, false, null);
  @Input() searchTitle: String;

  constructor(private movieService: MovieService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
  }

  public save() {
    this.movie.id = this.selectedSearchResult.id;
    this.movie.planToWatch=false;
    this.movieService.addMovie(this.movie)
      .then(() => {
        console.log('added movie' + this.movie.title);
        // this.movies = this.movies.filter(m => m !== movie);
        //see how we can modify the list movie[] and add this instead of a reload.
      });

    this.router.navigateByUrl('/movielist');
  }

  public searchMovie() {
    console.log('start search movie for ' + this.searchTitle);
    this.searchClicked = true;
    this.movieService.searchMovie(this.searchTitle).then(data => {
      this.searchResults = data.results;// (new MovieSearchResult(1, data.results[0].title, null, null))
    });
  }

  public selectMovie(id: Number) {
    console.log('selected clicked');
    this.movieService.lookupMovie(id).then(data => {
      this.selectedSearchResult = data;
     
      this.movie.title = this.selectedSearchResult.title;
    })
    this.searchResults= [];
    this.searchClicked = false;
    
  }

  public saveMovieToWatch(id: Number){
    console.log('id= '+ id);
    
    var movie: IMovie = new Movie(null, id, '', null, false, new Date(), false, true, []);
    this.movieService.lookupMovie(id).then(data => {
      movie = data;
      movie.title = data.title;
      console.log('title= '+data.title);
      movie.planToWatch = true;
      this.movieService.addMovie(movie)
        .then(() => {
          console.log('added movie to watch' + movie.title);
          
        });
   
    })

   
  }
}
