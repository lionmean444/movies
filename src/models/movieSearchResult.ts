export interface IMovieSearchResult{
    id:number,
    title:String;
    year:Date;
    characters:String[];
    
}

export class MovieSearchResult implements IMovieSearchResult{
     
    constructor (
        public id:number,
        public title: String,
        public year:Date,
        public characters: String[]){}
    
}