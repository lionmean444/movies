

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {Movie, IMovie} from '../../models/movie'
 

@Injectable()
export class MovieService {

  private moviesUrl = '/movies'; //run with single node server
  //private moviesUrl = 'http://127.0.0.1:3000/movies'; //use when ng serve nad seperate node server
  private headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});

  private apiKey = '737d5c170c6cee706e458b0c24b2327f';
  private apiURL='https://api.themoviedb.org/3';

  mov: Movie = new Movie('1', 1, 'title',3,false,new Date('1/2/2017'),true, false, []);
 
  movies:IMovie[] = [
   this.mov,
   new Movie('2',2, 'title',3,false,new Date('1/2/2017'),true,false, []),
   {_id:'1',id:3, title:'title',rating:3,thiss:false, dateWatched: new Date('1/2/2017'),watchAgain:true, planToWatch:false, characters: []}
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

  public editMovie(movie:IMovie): Promise<void> {
    return this.http.put(this.moviesUrl+"/"+movie._id, movie).toPromise()
    .then(() => null)
    .catch(this.handleError);
    
  }

  public getMovie(id:String): Promise<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get(url).toPromise().then(response => response.json() as Movie).catch(this.handleError);
  }

  public deleteMovie(id:String): Promise<void> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  public getMoviePoster(id:Number):  Promise<any>{
    var url = this.apiURL+'/movie/'+id;
    url += '?api_key='+ this.apiKey;
    var base = 'http://image.tmdb.org/t/p/w185/';
    var image = 'nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg';
    var results='';
    return this.http.get(url).toPromise().then(data => 
      // Read the result field from the JSON response.
      //console.log('my data log= '+ data.json()['poster_path'])
      //results = data.json()['poster_path'];
      //console.log('my results = '+ results);
      base+data.json()['poster_path']
      
    );
     
    //  console.log('result empty');  
     
   // console.log('my results2 = '+ results);
  // return base+results;
   // var imagePath = this.http.get(url).toPromise().then(response => response.json().poster_path).catch(this.handleError)
    //return this.http.get(this.moviesUrl).toPromise().then(response => response.json() as Movie[]).catch(this.handleError);

  }
  public searchMovie(title:String):Promise<any>{
  //  console.log('begin searching movie in service.searchMovie: '+ title);
    var url = this.apiURL+'/search/movie';
    url += '?api_key='+ this.apiKey;
    url += '&query='+title;
     
    return this.http.get(url).toPromise().then(data => 
      // Read the result field from the JSON response.
      //console.log('my data log= '+ data.json()['poster_path'])
      //results = data.json()['poster_path'];
      //console.log('my results = '+ results);
      data.json()
    );
  }

  public lookupMovie(id:Number):Promise<any>{
  //  console.log('begin looking up movie in service.lookupMovie: '+ id);
    var url = this.apiURL+'/movie/'+id;
    url += '?api_key='+ this.apiKey;
    
     
    return this.http.get(url).toPromise().then(data => 
      // Read the result field from the JSON response.
      //console.log('my data log= '+ data.json()['poster_path'])
      //results = data.json()['poster_path'];
      //console.log('my results = '+ results);
      data.json()
    );
  }
  
  public getNowPlaying(): Promise<any>{
    //  console.log('begin searching movie in service.searchMovie: '+ title);
      var url = this.apiURL+'/movie/now_playing';
      url += '?api_key='+ this.apiKey;
      
       
      return this.http.get(url).toPromise().then(data => 
        // Read the result field from the JSON response.
        //console.log('my data log= '+ data.json()['poster_path'])
        //results = data.json()['poster_path'];
        //console.log('my results = '+ data.json()["results"])
        data.json()["results"]
      );
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
