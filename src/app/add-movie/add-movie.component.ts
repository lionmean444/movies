import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MovieService} from '../services/movie-service.service'
import {Movie, IMovie} from '../../models/movie'
import {MovieSearchResult, IMovieSearchResult} from '../../models/movieSearchResult'
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  providers:[MovieService],
})
export class AddMovieComponent implements OnInit {
  submitted:boolean;
  movie:IMovie = new Movie(null, 1,'', null ,false, new Date(),false, []);
  poster:String;
  searchResults: any[] = [];
  selectedSearchResult: IMovieSearchResult;
  
  
  constructor(private movieService:MovieService, private router: Router) {
    
    this.findMovie();
   
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
  
  public getMoviePoster(m: any){
    console.log('start getting poster');
    this.movieService.getMoviePoster(m.id).then(data=>{
     if (data !='undefined'  || data != 'null' || data !='' || data !=' '){
       m.posterr = data;
     } else {
       m.posterr ='';
     }
     console.log('poster data '+m.id+'-'+ data)
     }).catch(e=>{
       
       console.log ('error getting movies poster for '+ m.id + ' '+ e);
     }) ;
  
  }
  
  public findMovie(){
    console.log('start search movie');
    console.log('POSTER: '+this.getMoviePoster(568));
  this.movieService.searchMovie('apollo 13').then(data => {
  this.searchResults = data.results;// (new MovieSearchResult(1, data.results[0].title, null, null))
  for (var x=0; x<this.searchResults.length;x++){
    console.log('start looping movie title '+ x +' '+ this.searchResults[x].title);
    console.log('start looping movie id '+ this.searchResults[x].id);
 
    this.getMoviePoster(this.searchResults[x]);
  }
 
});

}

  

}
