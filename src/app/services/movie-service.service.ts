

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {Movie, IMovie} from '../../models/movie'

@Injectable()
export class MovieService {

  private moviesUrl = 'http://127.0.0.1:3000/movies'; 
  private headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});

  mov: Movie = new Movie('1', 1, 'title',3,false,new Date('1/2/2017'),true,[]);
 
  movies:IMovie[] = [
   this.mov,
   new Movie('2',2, 'title',3,false,new Date('1/2/2017'),true,[]),
   {_id:'1',id:3, title:'title',rating:3,thiss:false, dateWatched: new Date('1/2/2017'),watchAgain:true, characters: []}
   //{'title',3,false,new Date('1/2/2017'),true,[]}
]

  constructor(private http: Http) {}
  
  getMovies(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl).toPromise().then(response => response.json() as Movie[]).catch(this.handleError);
    
  }

  getStaticMovies():IMovie[] {
    return this.movies;
  }

  public addMovie(movie:IMovie): Promise<void> {
    return this.http.post(this.moviesUrl, movie).toPromise()
    .then(() => null)
    .catch(this.handleError);
    
  }

  public deleteMovie(id:String): Promise<void> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);   
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
