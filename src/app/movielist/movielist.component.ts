import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

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
  planToWatch: Boolean;
  nowPlaying: Boolean = false;

  constructor(private movieService: MovieService, private activatedroute:ActivatedRoute) {
    //the following is needed as oninit doesnt refresh
    activatedroute.queryParams
    .subscribe(params => {
      this.planToWatch = params['toWatch']=="true";
      this.nowPlaying = params['nowplaying']=="true";
     });
     
     console.log('toWatch param = ' + this.planToWatch);
     console.log('newreleases param = ' + this.nowPlaying);
     if (this.nowPlaying == true){
       console.log('newreleases getting');
       this.movieService.getNowPlaying().then(data =>
        this.movies = data
        );
     } else {
     this.movieService.getMovies().then(data =>
      this.movies = data.filter(m=>m.planToWatch == this.planToWatch)
      );
    }
    
  }

  ngOnInit() {
    // this.movies = this.movieService.getStaticMovies(); //static
     
    if (this.nowPlaying == true){
      this.movieService.getNowPlaying().then(data =>
        this.movies = data
        );
     } else {
    this.movieService.getMovies().then(data =>
      //this.movies = data 
      this.movies = data.filter(m=>m.planToWatch == this.planToWatch)
      
    );
  }
    console.log('toWatch init = ' + this.planToWatch);
    console.log('nowPlaying param = ' + this.nowPlaying);

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

    public saveAsWatched(_id: String){
      var movie: any;
      movie = new Movie(_id, null,'',null,null,null,null,true, []);
      this.movieService.getMovie(_id).then(data => {
        movie = data;
        console.log('data= '+ movie);
        //   movie.dateWatched= new Date();
           movie.planToWatch = false;
           this.movieService.editMovie(movie);
      })
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
    
  public editModeToggle(turnOn: boolean) {
    console.log('editMode is ' + this.editMode + 'turning it ' + turnOn);
    this.editMode = turnOn;
    return false;
  }

}
