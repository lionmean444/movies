export interface IMovie{
    _id:String,
    id:Number,
    title:String;
    rating: Number;
    thiss:boolean;
    characters:String[];
    dateWatched:Date;
    watchAgain:boolean;
    planToWatch:boolean;
}

export class Movie implements IMovie{
    constructor (public _id:String,
        public id:Number,
        public title: String,
        public rating: Number,
        public thiss: boolean,
        public dateWatched: Date,
        public watchAgain: boolean,
        public planToWatch:boolean,
        public characters: String[]){}
    
}