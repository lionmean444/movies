import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../services/movie-service.service'

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.css']
})
export class MoviePosterComponent implements OnInit {

 private  _movieID:Number;
  poster:String;

  constructor(private movieService: MovieService,) {
    
  }
  
  ngOnInit() {
    // this.getMoviePoster();
    this.poster = 'test'+ this.movieID;
  }

  //*WRAPPED this with setter @input because it needs to call the method when a movie is selected. */
  get movieID(): Number {
    // transform value for display
    return this._movieID;
  }
  @Input()
  set movieID(movieID: Number) {
    console.log('prev value: ', this._movieID);
    console.log('got name: ', movieID);
    this._movieID = movieID;
    this.getMoviePoster();
  }
  


  public getMoviePoster() {
    console.log('start getting poster');
    
    this.movieService.getMoviePoster(this.movieID).then(data => {
      if (data != 'undefined' || data != 'null' || data != '' || data != ' ') {
        this.poster = data;
      } else {
        this.poster = '';
      }
      console.log('poster data ' + this.movieID + '-' + data)
    }).catch(e => {

      console.log('error getting movies poster for ' + this.movieID + ' ' + e);
    });

  }

}
