export interface IMovie{
    id:number,
    title:String;
    rating: Number;
    thiss:boolean;
    characters:String[];
    dateWatched:Date;
    watchAgain:boolean;
}

export class Movie implements IMovie{
     
    constructor (public id:number,
        public title: String,
        public rating: Number,
        public thiss: boolean,
        public dateWatched: Date,
        public watchAgain: boolean,
        public characters: String[]){}
    
}