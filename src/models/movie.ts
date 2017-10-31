export interface IMovie{
    title:String;
    rating: Number;
    thiss:boolean;
    characters:String[];
    dateWatched:Date;
    watchAgain:boolean;
}

export class Movie implements IMovie{
     
    constructor (public title: String,
        public rating: Number,
        public thiss: boolean,
        public dateWatched: Date,
        public watchAgain: boolean,
        public characters: String[]){}
    
}